import { Component, OnInit, OnDestroy } from "@angular/core";
import { CategoryService } from "../../services";
import { Podcast } from "podcast-feed-serializer";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { TitleDisplayHelpSheet, SubCategoryHelpSheet, TypeHelpSheet, CopyrightHelpSheet, NewFeedUrlHelpSheet, BlockHelpSheet, CompleteHelpSheet } from "../help";
import { ManagerService } from "../services";

@Component({
  selector: "manager-tab-general-optional",
  templateUrl: "tab-general-optional.component.html",
  styleUrls: ["../design-common.scss"]
})
export class ManagerTabGeneralOptionalComponent implements OnInit, OnDestroy {
  subCategories: string[];
  podcast: Podcast;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private categoryService: CategoryService,
    private managerService: ManagerService
  ) { }

  ngOnInit() {
    this.managerService.podcastFeed.subscribe(x => {
      this.podcast = x;
      this.refreshSubCategories();
    });
    this.podcast = this.managerService.currentPodcast;
    this.refreshSubCategories();
  }

  ngOnDestroy() {
    this.managerService.podcastFeed.unsubscribe();
  }

  showHelp(name: string): void {
    this._bottomSheet.open(this.getSheet(name));
  }

  getSheet(name: string) {
    switch (name) {
      case "titleDisplay":
        return TitleDisplayHelpSheet;
      case "subCategory":
        return SubCategoryHelpSheet;
      case "type":
        return TypeHelpSheet;
      case "copyright":
        return CopyrightHelpSheet;
      case "newFeedUrl":
        return NewFeedUrlHelpSheet;
      case "block":
        return BlockHelpSheet;
      case "complete":
        return CompleteHelpSheet;
    }
  }

  refreshSubCategories() {
    if (this.podcast && this.podcast.category && this.podcast.category !== "")
      this.subCategories = this.categoryService.getSubCategories(
        this.podcast.category
      );
  }
}
