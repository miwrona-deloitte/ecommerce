import { Category } from '../model/Catalog/Category';
class CategoryService {
  private categories;

  constructor(categories: Category[]) {
    this.categories = categories;
  }

  public getAll() {
    return this.categories;
  }

  public getMainCategories() {
    return this.categories.filter(category => {
      return !category.hasParent;
    });
  }

  public getCurrent(id: string) {
    return this.categories.filter(category => {
      let pathArr = category.path.split('/');
      return pathArr.includes(id);
    });
  }
}

export default CategoryService;
