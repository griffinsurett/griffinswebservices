#!/usr/bin/env bash
# smoke.sh — drive griffinswebservices against a running dev server
# Usage: bash .claude/skills/run-griffinswebservices/smoke.sh [PORT]
# Default port: 9999 (matches astro.config.mjs server.port)

set -euo pipefail

PORT="${1:-9999}"
BASE="http://localhost:$PORT"
ORIGIN="$BASE"
PASS=0
FAIL=0

ok()   { echo "  PASS  $1"; ((PASS++)); }
fail() { echo "  FAIL  $1 — $2"; ((FAIL++)); }

check_status() {
  local label="$1" url="$2" expected="${3:-200}"
  local code
  code=$(curl -s -L -o /dev/null -w "%{http_code}" "$url")
  if [[ "$code" == "$expected" ]]; then ok "$label ($code)"; else fail "$label" "got $code, want $expected"; fi
}

# ── Page smoke tests ──────────────────────────────────────────────────────────
echo ""
echo "=== Pages ==="
check_status "GET /"           "$BASE/"
check_status "GET /pricing"    "$BASE/pricing"
check_status "GET /links"      "$BASE/links"
check_status "GET /contactus"  "$BASE/contactus"
check_status "GET /404"        "$BASE/this-page-does-not-exist" 404

# ── API: estimate (chat/__init__) ────────────────────────────────────────────
echo ""
echo "=== API /estimate ==="
ESTIMATE_RESP=$(curl -s -X POST "$BASE/api/estimate" \
  -H "Content-Type: application/json" \
  -H "Origin: $ORIGIN" \
  -d '{
    "bizName":  "Smoke Test Plumbing",
    "bizLoc":   "Miami FL",
    "bizDesc":  "A local plumbing company serving Miami homeowners.",
    "bizServes":"city",
    "niches":   ["plumbing"],
    "mode":     "chat",
    "message":  "__init__"
  }')

if echo "$ESTIMATE_RESP" | python3 -c "import sys,json; d=json.load(sys.stdin); assert 'message' in d and 'patch' in d" 2>/dev/null; then
  ok "POST /api/estimate → has message + patch"
else
  fail "POST /api/estimate" "unexpected response: ${ESTIMATE_RESP:0:120}"
fi

# ── API: estimate — missing fields → 400 ─────────────────────────────────────
BAD_CODE=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$BASE/api/estimate" \
  -H "Content-Type: application/json" \
  -H "Origin: $ORIGIN" \
  -d '{"bizName":"x"}')
if [[ "$BAD_CODE" == "400" ]]; then ok "POST /api/estimate missing fields → 400"; else fail "POST /api/estimate missing fields" "got $BAD_CODE"; fi

# ── API: chat ─────────────────────────────────────────────────────────────────
echo ""
echo "=== API /chat ==="
CHAT_RESP=$(curl -s -X POST "$BASE/api/chat" \
  -H "Content-Type: application/json" \
  -H "Origin: $ORIGIN" \
  -d '{"messages":[{"role":"user","content":"What services do you offer?"}]}')

if echo "$CHAT_RESP" | python3 -c "import sys,json; d=json.load(sys.stdin); assert 'reply' in d and len(d['reply']) > 10" 2>/dev/null; then
  ok "POST /api/chat → has reply"
else
  fail "POST /api/chat" "unexpected response: ${CHAT_RESP:0:120}"
fi

# ── Summary ───────────────────────────────────────────────────────────────────
echo ""
echo "=== Results: $PASS passed, $FAIL failed ==="
[[ $FAIL -eq 0 ]]
