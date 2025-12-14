import { Injectable } from "@angular/core";
import categories from "podcast-categories";

type PodcastCategories = Record<string, Record<string, boolean>>;

@Injectable()
export class CategoryService {
  private readonly categories: PodcastCategories = categories as PodcastCategories;

  constructor() {}

  getMainCategories(): string[] {
    return Object.keys(this.categories);
  }

  getSubCategories(mainCategory: string): string[] {
    return Object.keys(this.categories[mainCategory] || {});
  }
}
