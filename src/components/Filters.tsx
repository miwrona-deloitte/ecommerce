import styles from './Filters.module.scss';

const Filters = () => {
  return (
    <div className={styles.filters}>
      <img src='pictures/filtering.svg' alt='Filtering and sorting icon' width='15' className={styles.icon} />
      <span className={styles.text}>Filtering and sorting</span>
    </div>
  );
};

export default Filters;
