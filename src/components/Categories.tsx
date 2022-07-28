import styles from './Categories.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import CategoryService from '../service/CategoryService';

declare type categoriesProps = {
  categoryId?: number | null;
};

export const Categories = (props: categoriesProps) => {
  const categoriesCMS = useSelector((state: RootState) => state.categories.items);

  if (typeof categoriesCMS !== 'object') {
    <div className={styles.categories}>No categories</div>;
  }

  const categoryService = new CategoryService(categoriesCMS);
  if (typeof props.categoryId === 'number') {
    // console.log(categoryService.getCurrent(props.categoryId.toString()));
    console.log(categoryService.getCurrentOrdered(props.categoryId.toString()));
  }

  return (
    <div className={styles.categories}>
      <span className={styles.header}>{props.categoryId}</span>
      <div className={styles.flyoutMenu}>
        <div className={styles.col}>
          <h4 className={styles.flyoutMenuTitle}>Living Room</h4>
          <ul>
            <li className={styles.flyoutMenuItem}>Living room tables</li>
            <li className={styles.flyoutMenuItem}>Living room tables</li>
            <li className={styles.flyoutMenuItem}>RTV furniture</li>
            <li className={styles.flyoutMenuItem}>Bookcases and shelves</li>
          </ul>
          <h4 className={styles.flyoutMenuTitle}>Bedroom</h4>
          <ul>
            <li className={styles.flyoutMenuItem}>Beds</li>
            <li className={styles.flyoutMenuItem}>Chests of drawers</li>
            <li className={styles.flyoutMenuItem}>Bedside tables and tables</li>
            <li className={styles.flyoutMenuItem}>Dressing tables</li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4 className={styles.flyoutMenuTitle}>Kitchen</h4>
          <ul>
            <li className={styles.flyoutMenuItem}>Kitchen islands</li>
            <li className={styles.flyoutMenuItem}>Kitchen fronts</li>
            <li className={styles.flyoutMenuItem}>Worktops</li>
          </ul>
          <h4 className={styles.flyoutMenuTitle}>Dining room</h4>
          <ul>
            <li className={styles.flyoutMenuItem}>Dining tables</li>
            <li className={styles.flyoutMenuItem}>Dining chairs</li>
            <li className={styles.flyoutMenuItem}>Cupboards and buffets</li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4 className={styles.flyoutMenuTitle}>Children’s room</h4>
          <ul>
            <li className={styles.flyoutMenuItem}>Children’s room</li>
            <li className={styles.flyoutMenuItem}>Children’s beds</li>
            <li className={styles.flyoutMenuItem}>Children’s wardrobes</li>
            <li className={styles.flyoutMenuItem}>Children’s tables and desks</li>
            <li className={styles.flyoutMenuItem}>Children’s chests of drawers</li>
            <li className={styles.flyoutMenuItem}>Furniture for children</li>
          </ul>
          <h4 className={styles.flyoutMenuTitle}>Office</h4>
          <ul>
            <li className={styles.flyoutMenuItem}>Desks</li>
            <li className={styles.flyoutMenuItem}>Office cabinets</li>
            <li className={styles.flyoutMenuItem}>Bookcases and shelves</li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4 className={styles.flyoutMenuTitle}>Bathroom</h4>
          <ul>
            <li className={styles.flyoutMenuItem}>Bathroom furniture</li>
            <li className={styles.flyoutMenuItem}>bathroom cabinets</li>
            <li className={styles.flyoutMenuItem}>Cupboards and buffets</li>
          </ul>
          <h4 className={styles.flyoutMenuTitle}>Balcony and garden</h4>
          <ul>
            <li className={styles.flyoutMenuItem}>Garden tables and chairs</li>
            <li className={styles.flyoutMenuItem}>Garden and terrace sets</li>
            <li className={styles.flyoutMenuItem}>Children’s chests of drawers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
