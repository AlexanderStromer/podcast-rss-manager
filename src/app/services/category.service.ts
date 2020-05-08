import { Injectable } from "@angular/core";

declare const require;
const categories = require("podcast-categories/index");

@Injectable()
export class CategoryService {
  constructor() {}

  getMainCategories(): string[] {
    let x: string[] = [];
    for (let category in categories) {
      x.push(category);
    }
    return x;
  }

  getSubCategories(mainCategory: string): string[] {
    let x: string[] = [];
    for (let subCategory in categories[mainCategory]) {
      x.push(subCategory);
    }
    return x;
  }
}
