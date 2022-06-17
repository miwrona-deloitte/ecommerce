import './Furniture.scss';
import { useState } from 'react';
import { Product } from '../model/Catalog/Furniture';
import { getColors } from '../dictionary/colors';

type Props = { product: Product };

const CatalogItem = (props: Props) => {
  const [active, setActive] = useState(1);
  const colors = getColors();
  const product = props.product;
  return (
    <div className='catalog-item'>
      <div className='picture-group'>
        <div className='overlay'>
          <div className='overlay-btn'>See product</div>
          <div className='actions'>
            <img src='pictures/heart-white.svg' alt='Heart Overlay' width='21' />
            <img src='pictures/basket-white.svg' alt='Basket Overlay' width='21' />
          </div>
        </div>
        <img
          src={'pictures/' + product.img}
          alt={product.img}
          width='350'
          height='350'
          className='catalog-item-picture'
        />
      </div>
      <div className='details'>
        <div className='caption'>
          <div className='name'>{product.name}</div>
          <div className='price'>{product.price + ' zł'}</div>
        </div>
        {/* <div className='color-variant'>{product.color}</div> */}
        <div className='color-variant'>
          {colors.map(color => (
            <div className={color.id === active ? 'surrounding active' : 'surrounding'} key={color.id}>
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

export default CatalogItem;
