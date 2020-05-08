import { Injectable } from "@angular/core";

declare const require;
const iso_639_1 = require("iso-639/data/iso_639-1.json");

@Injectable()
export class LanguageService {
  constructor() {}

  get(): Language[] {
    let x: Language[] = [];
    for (let languageIndex in iso_639_1) {
      x.push(
        new Language({ code: iso_639_1[languageIndex]["639-1"], name: iso_639_1[languageIndex]["name"] })
      );
    }
    return x;
  }
}

export class Language {
  constructor(x: Language) {
    Object.assign(this, x);
  }

  code: string;
  name: string;
}
