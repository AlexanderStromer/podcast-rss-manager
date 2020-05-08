import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { FeedSerializerService, FileManagementService } from "../services";
import { Podcast } from "../models";
import { ManagerService } from "./services";

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
    private managerService: ManagerService
  ) { }

  ngOnInit() {
    this.managerService.podcastFeed.next(this.defaultPodcast);
  }

  uploadFile_click() {
    this.file.nativeElement.click();
  }

  downloadFile_click() {
    this.fileManagementService.saveFile(
      this.feedSerializerService.saveFeed(this.managerService.currentPodcast)
    );
  }

  uploadFile_change() {
    if (this.file.nativeElement.files && this.file.nativeElement.files[0]) {
      this.fileManagementService
        .readFile(this.file.nativeElement.files[0])
        .then(x =>
          this.feedSerializerService
            .loadFeed(x)
            .then(y => this.managerService.podcastFeed.next(y))
        );
    }
  }
}
