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

  public getLeafsIdsByMinorId(minorId: number): number[] {
    const leafs = this.categories
      .filter(category => category.path.split('/').includes(minorId.toString()))
      .filter(leaf => leaf.path.split('/').length === 3);
    return leafs.map(leaf => leaf.id);
  }

  public isMinor(categoryId: number): boolean {
    const minorsIds = this.categories.filter(category => category.path.split('/').length === 2).map(minor => minor.id);
    return minorsIds.indexOf(categoryId) >= 0;
  }

  // returns;
  // [
  //   main: 'Decorations',
  //   minor: [
  //     {
  //       minor: { name: 'Minor name 1' };
  //       leaf: [
  //         {
  //           name: 'Leaf Name1';
  //         },
  //         {
  //           name: 'Leaf Name2';
  //         },
  //       ];
  //     },
  //     {
  //       minor: { name: 'Minor name 2' };
  //       leaf: [
  //         {
  //           name: 'Leaf Name3';
  //         },
  //         {
  //           name: 'Leaf Name4';
  //         },
  //       ];
  //     },
  //   ],
  // ];
  public getCurrentOrdered(id: string) {
    const main = this.categories
      .filter(category => !category.hasParent)
      .filter(category => category.path.split('/').includes(id));

    const minorsByMainId = this.categories
      .filter(category => category.path.split('/').includes(id))
      .filter(category => category.path.split('/').length === 2);

    const minorAndLeafs: { minor: Category; leafs: Category[] }[] = [];
    minorsByMainId.map(minor => {
      const leafsByMinorId = this.categories
        .filter(category => category.path.split('/').includes(minor.id.toString()))
        .filter(leaf => leaf.path.split('/').length === 3);

      minorAndLeafs.push({
        minor: minor,
        leafs: leafsByMinorId,
      });
    });

    return {
      main: main[0],
      minor: minorAndLeafs,
    };
  }
}

export default CategoryService;
