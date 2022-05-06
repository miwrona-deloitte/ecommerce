import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_ENTRY_ID } from "../graphql/query/product";

const FeaturedProduct: React.FC<{ entryId: string }> = (props) => {
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ENTRY_ID, {
    variables: { entryId: props.entryId },
  });

  if (loading) return <div>'Loading...'</div>;

  if (error) {
    // log error.message
    return <span>`Product doesn't exist. Id: `{props.entryId}</span>;
  }
  if (data) {
    const product = data.product;
    return (
      <div>
        <span>{product.name}</span>
        <span>{product.price}</span>
        <img
          src={product.picture.url}
          width="100"
          alt={product.picture.title}
        />
      </div>
    );
  }
  return <></>;
};

export default FeaturedProduct;
