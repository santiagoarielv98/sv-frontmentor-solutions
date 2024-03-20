export interface Item {
  title?: string;
  description?: string;
}

export interface Nutrition {
  calories: string;
  carbs: string;
  protein: string;
  fat: string;
}

export interface Recipe {
  title: string;
  description?: string;
  image?: string;
  preparationTime?: {
    total?: string;
    preparation?: string;
    cooking?: string;
  };
  ingredients?: Item[];
  instructions?: Item[];
  nutrition?: Nutrition;
}
