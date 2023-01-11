import { Component, OnInit } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import {
  EpisodeTitleHelpSheet, EpisodeEpisodeUrlHelpSheet, EpisodeLengthHelpSheet, EpisodeDurationHelpSheet,
  EpisodePublicationDateHelpSheet, EpisodeDescriptionHelpSheet, EpisodeEpisodeSiteUrlHelpSheet,
  EpisodeImageUrlHelpSheet, EpisodeExplicitHelpSheet, EpisodeTitleDisplayHelpSheet,
  EpisodeEpisodeHelpSheet, EpisodeSeasonHelpSheet, EpisodeEpisodeTypeHelpSheet, EpisodeBlockHelpSheet
} from "../help";
import { ManagerService } from "../services";
import { PodcastEpisode } from "podcast-feed-serializer";
import { MatLegacyDialogRef as MatDialogRef } from "@angular/material/legacy-dialog";

@Component({
  selector: "manager-episode-details-dialog",
  templateUrl: "manager-episode-details-dialog.component.html",
  styleUrls: ["manager-episode-details-dialog.component.scss", "../design-common.scss"],
})
export class ManagerEpisodeDetailsDialogComponent implements OnInit {
  podcastEpisode: PodcastEpisode;
  showAllFields: boolean = false;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private managerService: ManagerService,
    public dialogRef: MatDialogRef<ManagerEpisodeDetailsDialogComponent>
  ) { }

  ngOnInit() {
    this.managerService.podcastEpisodeFeed.subscribe((x) => (this.podcastEpisode = new PodcastEpisode(x)));
    this.podcastEpisode = new PodcastEpisode(this.managerService.currentPodcastEpisode);
  }

  showHelp(name: string): void {
    this._bottomSheet.open(this.getSheet(name));
  }

  getSheet(name: string) {
    switch (name) {
      case "title":
        return EpisodeTitleHelpSheet;
      case "episodeUrl":
        return EpisodeEpisodeUrlHelpSheet;
      case "length":
        return EpisodeLengthHelpSheet;
      case "duration":
        return EpisodeDurationHelpSheet;
      case "publicationDate":
        return EpisodePublicationDateHelpSheet;
      case "description":
        return EpisodeDescriptionHelpSheet;
      case "episodeSiteUrl":
        return EpisodeEpisodeSiteUrlHelpSheet;
      case "imageUrl":
        return EpisodeImageUrlHelpSheet;
      case "explicit":
        return EpisodeExplicitHelpSheet;
      case "titleDisplay":
        return EpisodeTitleDisplayHelpSheet;
      case "episode":
        return EpisodeEpisodeHelpSheet;
      case "season":
        return EpisodeSeasonHelpSheet;
      case "episodeType":
        return EpisodeEpisodeTypeHelpSheet;
      case "block":
        return EpisodeBlockHelpSheet;
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  ok() {
    this.dialogRef.close(this.podcastEpisode);
  }
}
