import ProductList from "../components/ProductList";
import Layout from "../components/Layout/Layout";

const Catalog: React.FC = () => {
  return (
    <Layout>
      <h1>Catalog</h1>
      <ProductList></ProductList>
    </Layout>
  );
};

export default Catalog;
