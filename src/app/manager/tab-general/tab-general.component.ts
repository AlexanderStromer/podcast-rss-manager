import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { TitleHelpSheet, DescriptionHelpSheet, AuthorHelpSheet, WebsiteHelpSheet, EmailHelpSheet, LanguageHelpSheet, ExplicitHelpSheet, ImageUrlHelpSheet, CategoryHelpSheet } from "../help";
import { LanguageService, Language, CategoryService } from "../../services";
import { Podcast } from "podcast-feed-serializer";
import { ManagerService } from "../services";

@Component({
  selector: "manager-tab-general",
  templateUrl: "tab-general.component.html",
  styleUrls: ["../design-common.scss"]
})
export class ManagerTabGeneralComponent implements OnInit, OnDestroy {
  languages: Language[];
  categories: string[];
  podcast: Podcast;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private languageService: LanguageService,
    private categoryService: CategoryService,
    private managerService: ManagerService
  ) { }

  ngOnInit() {
    this.languages = this.languageService.get();
    this.categories = this.categoryService.getMainCategories();
    this.managerService.podcastFeed.subscribe(x => (this.podcast = x));
    this.podcast = this.managerService.currentPodcast;
  }

  ngOnDestroy() {
    this.managerService.podcastFeed.unsubscribe();
  }

  showHelp(name: string): void {
    this._bottomSheet.open(this.getSheet(name));
  }

  getSheet(name: string) {
    switch (name) {
      case "title":
        return TitleHelpSheet;
      case "description":
        return DescriptionHelpSheet;
      case "author":
        return AuthorHelpSheet;
      case "website":
        return WebsiteHelpSheet;
      case "email":
        return EmailHelpSheet;
      case "language":
        return LanguageHelpSheet;
      case "explicit":
        return ExplicitHelpSheet;
      case "imageUrl":
        return ImageUrlHelpSheet;
      case "category":
        return CategoryHelpSheet;
    }
  }
}
