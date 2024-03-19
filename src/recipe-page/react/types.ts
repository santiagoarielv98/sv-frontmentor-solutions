export interface Item {
  title: string;
  description: string;
}

export interface Recipe {
  title: string;
  subheader?: string;
  image?: string;
  alt?: string;
  preparations?: Item[];
  ingredients?: string[];
  instructions?: Item[];
}
