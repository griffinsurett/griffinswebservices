import { s as shouldProcessCollection, g as getCollectionMeta, d as getCollection, e as getItemKey, h as shouldItemHavePage, i as shouldItemUseRootPath } from './BaseLayout_CePagbbj.mjs';
import { g as getLayoutPath, a as getLayoutComponent, b as buildItemSEOProps, c as getPageCollections } from './layoutUtils_DfX0n960.mjs';

async function generateItemPaths(filter, buildParams) {
  const collections = getPageCollections();
  const paths = [];
  for (const coll of collections) {
    const collectionKey = coll;
    const shouldProcess = await shouldProcessCollection(collectionKey);
    if (!shouldProcess) continue;
    const meta = getCollectionMeta(collectionKey);
    const entries = await getCollection(collectionKey);
    entries.filter((entry) => filter(entry, meta)).forEach((entry) => {
      const slug = getItemKey(entry);
      paths.push({
        params: buildParams(collectionKey, slug),
        props: {
          entry,
          collectionMeta: meta,
          collectionName: collectionKey
        }
      });
    });
  }
  return paths;
}
async function prepareItemPageData(props) {
  const { entry, collectionMeta, collectionName } = props;
  const layoutPath = getLayoutPath(collectionMeta, entry, true);
  const LayoutComponent = await getLayoutComponent(layoutPath);
  let Content = null;
  const entryWithRender = entry;
  if (entryWithRender && typeof entryWithRender.render === "function") {
    const rendered = await entryWithRender.render();
    Content = rendered.Content;
  }
  const seoProps = await buildItemSEOProps(entry, collectionMeta);
  return {
    entry,
    collectionMeta,
    collectionName,
    LayoutComponent,
    Content,
    seoProps
  };
}
const rootLevelFilter = (entry, meta) => {
  return shouldItemHavePage(entry, meta) && shouldItemUseRootPath(entry, meta);
};
const collectionLevelFilter = (entry, meta) => {
  return shouldItemHavePage(entry, meta) && !shouldItemUseRootPath(entry, meta);
};
function buildRootLevelParams(_collection, slug) {
  return { slug };
}
function buildCollectionLevelParams(collection, slug) {
  return { collection, slug };
}

export { buildCollectionLevelParams as a, buildRootLevelParams as b, collectionLevelFilter as c, generateItemPaths as g, prepareItemPageData as p, rootLevelFilter as r };
