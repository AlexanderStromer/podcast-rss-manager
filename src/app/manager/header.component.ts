import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { FeedSerializerService, FileManagementService } from "../services";
import { Podcast } from "../models";
import { ManagerService } from "./services";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "manager-header",
  templateUrl: "header.component.html",
  styleUrls: ["header.component.css"]
})
export class ManagerHeaderComponent implements OnInit {
  private defaultPodcast: Podcast = new Podcast({ language: "en" });
  @ViewChild("file") file: ElementRef;

  constructor(
    private feedSerializerService: FeedSerializerService,
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
    if (this.feedSerializerService.isValidForSave(this.managerService.currentPodcast)) {
      this.managerService.currentPodcast.sortEpisodesDescending();
      this.fileManagementService.saveFile(
        this.feedSerializerService.saveFeed(this.managerService.currentPodcast)
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
          this.feedSerializerService
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
