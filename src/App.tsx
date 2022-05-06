import "./App.css";
import { useQuery } from "@apollo/client";
import { CMS_HOME_PAGE } from "./graphql/query/product";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import FeaturedProduct from "./components/FeaturedProduct";

function renderOptions(links: any) {
  // create an asset block map
  const assetBlockMap = new Map();
  // loop through the assets and add them to the map
  for (const asset of links.assets.block) {
    assetBlockMap.set(asset.sys.id, asset);
  }

  // create an entry block map
  const entryBlockMap = new Map();
  // loop through the entries and add them to the map
  for (const entry of links.entries.block) {
    entryBlockMap.set(entry.sys.id, entry);
  }

  const entryInlineMap = new Map();
  for (const entry of links.entries.inline) {
    entryInlineMap.set(entry.sys.id, entry);
  }

  return {
    // other options...

    renderNode: {
      // other options...
      [BLOCKS.EMBEDDED_ASSET]: (node: any, next: any) => {
        // find the asset in the assetBlockMap by ID
        const asset = assetBlockMap.get(node.data.target.sys.id);

        // render the asset accordingly
        return <img src={asset.url} alt="My image alt text" width="400"/>;
      },
      [INLINES.EMBEDDED_ENTRY]: (node: any, next: any) => {
        const inline = entryInlineMap.get(node.data.target.sys.id);
        
        return <FeaturedProduct entryId={node.data.target.sys.id}/>
      },
    },
  };
}

function App() {
  const { loading, error, data } = useQuery(CMS_HOME_PAGE);
  if (loading) return <div>'Loading...'</div>;

  if (error) {
    // log error.message
    return <span>`No products found.`</span>;
  }
  let html = documentToReactComponents(data.page.banner.json, renderOptions(data.page.banner.links));

  return html;
}

export default App;
