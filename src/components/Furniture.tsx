import './Furniture.scss';
import { useState } from 'react';
import Filters from './Filters';

type Props = { product: Product };

const ProductItem = (props: Props) => {
  const [active, setActive] = useState(1);
  const colors = [
    {
      id: 1,
      hex: '#4f311c',
    },
    {
      id: 2,
      hex: '#855736',
    },
    {
      id: 3,
      hex: '#E5D3C6',
    },
    {
      id: 4,
      hex: '#FFD8BB',
    },
  ];
  const product = props.product;
  return (
    <div>
      <img src={'pictures/' + product.img} alt={product.img} width='350' height='350' />
      <div className='details'>
        <div className='caption'>
          <div className='name'>{product.name}</div>
          <div className='price'>{product.price + ' zł'}</div>
        </div>
        {/* <div className='color-variant'>{product.color}</div> */}
        <div className='color-variant'>
          {colors.map(color => (
            <div className={color.id == active ? 'surrounding active' : 'surrounding'} key={color.id}>
              <div
                className='circle'
                style={{ backgroundColor: color.hex }}
                onClick={() => {
                  setActive(color.id);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
type Product = {
  id: number;
  name: string;
  price: string;
  img: string;
  color: string;
};

const Furniture: React.FC = () => {
  const products: Product[] = [
    {
      id: 0,
      name: 'Eco wood table, 100 x 220 cm',
      price: '1250',
      img: 'angelina-cXmER3VNxUA-unsplash.png',
      color: 'brown',
    },
    {
      id: 1,
      name: 'Eco wood table, 100 x 220 cm',
      price: '1250',
      img: 'nathan-oakley-EpuuFyGwOEs-unsplash.png',
      color: 'brown',
    },
    {
      id: 2,
      name: 'Eco wood table, 100 x 220 cm',
      price: '1250',
      img: 'jose-losada-9dRBM8Qw2TE-unsplash.png',
      color: 'brown',
    },
    {
      id: 3,
      name: 'Eco wood table, 100 x 220 cm',
      price: '1250',
      img: 'nathan-oakley-gj1dnc7yRG0-unsplash.png',
      color: 'brown',
    },
    {
      id: 4,
      name: 'Eco wood table, 100 x 220 cm',
      price: '1250',
      img: 'nathan-oakley-WiCAU5dwom8-unsplash.png',
      color: 'brown',
    },
    {
      id: 5,
      name: 'Eco wood table, 100 x 220 cm',
      price: '1250',
      img: 'nathan-oakley-OngbrOmqtzc-unsplash.png',
      color: 'brown',
    },
  ];
  return (
    <>
      <Filters />
      <div className='container'>
        {products.map(product => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Furniture;
