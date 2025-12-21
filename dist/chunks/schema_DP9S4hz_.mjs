import './BaseLayout_CwDjC27N.mjs';

function extractRelationConfig(data) {
  const configs = [];
  for (const [field, value] of Object.entries(data)) {
    if (!value) continue;
    if (isCollectionReference(value)) {
      configs.push({
        field,
        targetCollections: [value.collection],
        isArray: false
      });
    } else if (Array.isArray(value) && value.every(isCollectionReference)) {
      const collections = [...new Set(value.map((v) => v.collection))];
      configs.push({
        field,
        targetCollections: collections,
        isArray: true
      });
    }
  }
  return configs;
}
function normalizeReference(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.filter(isCollectionReference);
  if (isCollectionReference(value)) return [value];
  return [];
}
function isParentField(field) {
  return field === "parent" || field === "parentId" || field === "parentRef";
}
function isCollectionReference(value) {
  return value && typeof value === "object" && "collection" in value && "id" in value && typeof value.collection === "string" && typeof value.id === "string";
}

export { extractRelationConfig, isCollectionReference, isParentField, normalizeReference };
