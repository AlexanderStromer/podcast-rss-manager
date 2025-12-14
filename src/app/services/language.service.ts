import { Injectable } from "@angular/core";
import ISO6391 from 'iso-639-1';

@Injectable()
export class LanguageService {
  constructor() { }

  get(): Language[] {
    return ISO6391.getAllCodes().map(code =>
      new Language({ code, name: ISO6391.getName(code) })
    );
  }
}

export class Language {
  constructor(x: Language) {
    Object.assign(this, x);
  }

  code: string;
  name: string;
}
