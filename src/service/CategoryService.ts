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
    const categories = this.categories.filter(category => {
      return !category.hasParent;
    });
    const parsedCategories: any[] = [];
    categories.map(category => parsedCategories.push({ title: category.name, url: category.link, cms: true }));
    return parsedCategories;
  }

  public getCurrent(id: string) {
    return this.categories.filter(category => {
      let pathArr = category.path.split('/');
      return pathArr.includes(id);
    });
  }
}

export default CategoryService;
