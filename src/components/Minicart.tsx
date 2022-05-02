import Cart from "./Cart";

const Minicart: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        right: "12%",
        top: "52px",
        border: "solid 1px grey",
        borderRadius: "10px",
        padding: "5px"
      }}
    >
      <Cart />
    </div>
  );
};

export default Minicart;
