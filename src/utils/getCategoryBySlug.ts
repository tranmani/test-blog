import { CategoryType } from "../types/dataTypes";
import categories from "../data/categories.json";

const getCategoryBySlug = (slug: string): CategoryType | undefined => {
  let result: CategoryType | undefined = categories.categories.flat().find((category: CategoryType) => category.slug === slug);

  if (!result) {
    categories.categories.forEach((category: CategoryType) => {
      category.items && category.items.find((item: CategoryType) => {
        if (item.slug === slug) {
          result = item;
        }
        return result
      });
    })
  }

  return result;
}

export default getCategoryBySlug