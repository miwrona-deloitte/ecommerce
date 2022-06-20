import Cart from './Cart';

const Minicart: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        right: '105px',
        top: '40px',
        border: 'solid 1px grey',
        borderRadius: '10px',
        padding: '5px',
        zIndex: '3',
        backgroundColor: 'white',
      }}
    >
      <Cart />
    </div>
  );
};

export default Minicart;
