import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { FileManagementService } from "../../services";
import { Podcast, FeedSerializer } from "podcast-feed-serializer";
import { ManagerService } from "../services";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "manager-header",
  templateUrl: "header.component.html",
  styleUrls: ["header.component.scss"]
})
export class ManagerHeaderComponent implements OnInit {
  private defaultPodcast: Podcast = new Podcast({ language: "en" });
  @ViewChild("file") file: ElementRef;

  constructor(
    private fileManagementService: FileManagementService,
    private managerService: ManagerService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.managerService.podcastFeed.next(this.defaultPodcast);
  }

  uploadFile_click() {
    this.file.nativeElement.click();
  }

  downloadFile_click() {
    if (new FeedSerializer().isValidForSave(this.managerService.currentPodcast)) {
      this.managerService.currentPodcast.sortEpisodesDescending();
      this.fileManagementService.saveFile(
        new FeedSerializer().saveFeed(this.managerService.currentPodcast)
      );
    } else {
      this.snackBar.open("A valid podcast requires all fields in the General tab and at least 1 episode.", 'Close');
    }
  }

  uploadFile_change() {
    if (this.file.nativeElement.files && this.file.nativeElement.files[0]) {
      this.fileManagementService
        .readFile(this.file.nativeElement.files[0])
        .then(x =>
          new FeedSerializer()
            .loadFeed(x)
            .then(y => {
              y.sortEpisodesDescending();
              this.managerService.podcastFeed.next(y);
            })
        );
    }
  }

  project_link() {
    window.open('https://github.com/AlexanderStromer/podcast-rss-manager', '_blank');
  }
}
