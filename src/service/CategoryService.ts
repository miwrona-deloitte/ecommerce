import { Category } from '../model/Catalog/Category';
import { MenuItemType } from '../components/Layout/Navbar';

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
    const parsedCategories: MenuItemType[] = [];
    categories.map(category =>
      parsedCategories.push({ id: category.id, title: category.name, url: category.link ?? '/', cms: true }),
    );
    return parsedCategories;
  }

  public getCurrent(id: string) {
    return this.categories.filter(category => {
      let pathArr = category.path.split('/');
      return pathArr.includes(id);
    });
  }

  // returns
  //  [
  //   {
  //     minor: { name: 'Minor name 1' },
  //     leaf: [
  //       {
  //         name: 'Leaf Name1',
  //       },
  //       {
  //         name: 'Leaf Name2',
  //       },
  //     ],
  //   },
  //   {
  //     minor: { name: 'Minor name 2' },
  //     leaf: [
  //       {
  //         name: 'Leaf Name3',
  //       },
  //       {
  //         name: 'Leaf Name4',
  //       },
  //     ],
  //   },
  // ];
  public getCurrentOrdered(id: string) {
    const main = this.categories
      .filter(category => {
        return !category.hasParent;
      })
      .filter(category => {
        let pathArr = category.path.split('/');
        return pathArr.includes(id);
      });

    const minors = this.categories.filter(category => {
      return category.path.split('/').length === 2;
    });
    const minorAndLeafs: { minor: Category; leafs: Category[] }[] = [];
    minors.map(minor => {
      let leafsByMinorId = this.categories.filter(category => {
        let pathArr = category.path.split('/');
        return pathArr.includes(minor.id.toString());
      });

      minorAndLeafs.push({
        minor: minor,
        leafs: leafsByMinorId.filter(leaf => leaf.path.split('/').length === 3),
      });
    });

    return {
      main: main,
      minor: minorAndLeafs,
    };
  }
}

export default CategoryService;
