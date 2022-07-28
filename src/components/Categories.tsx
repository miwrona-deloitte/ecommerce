import styles from './Categories.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import CategoryService from '../service/CategoryService';
import { showCategoryState } from './Layout/Navbar';

export const Categories = (props: { showCategories: showCategoryState }) => {
  const categoriesCMS = useSelector((state: RootState) => state.categories.items);
  if (props.showCategories.show === false) {
    return <></>;
  }

  const categoryService = new CategoryService(categoriesCMS);
  if (typeof props.showCategories.category === 'number') {
    const categories = categoryService.getCurrentOrdered(props.showCategories.category.toString());
    return (
      <div className={styles.categories}>
        <span className={styles.header}>{categories.main.name}</span>
        <div className={styles.flyoutMenu}>
          {categories.minor.map(category => (
            <div className={styles.col}>
              <h4 className={styles.flyoutMenuTitle}>{category.minor.name}</h4>
              <ul>
                {category.leafs.map(leaf => (
                  <li className={styles.flyoutMenuItem}>{leaf.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <></>;
};
