import styles from './Categories.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import CategoryService from '../service/CategoryService';
import { showCategoryState } from './Layout/Navbar';
import { NavLink } from 'react-router-dom';

export const Categories = (props: { showCategories: showCategoryState }) => {
  const categoriesCMS = useSelector((state: RootState) => state.categories.items.all);
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
            <div className={styles.col} key={category.minor.id}>
              <h4 className={styles.flyoutMenuTitle}>
                <NavLink to={`/category/${category.minor.id}`}>{category.minor.name}</NavLink>
              </h4>
              <ul>
                {category.leafs.map(leaf => (
                  <li className={styles.flyoutMenuItem} key={leaf.id}>
                    <NavLink to={`/category/${leaf.id}`}>{leaf.name}</NavLink>
                  </li>
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
