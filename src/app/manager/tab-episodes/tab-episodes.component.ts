import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Podcast, PodcastEpisode } from "../../models";
import { ManagerService } from "../services";
import { ManagerEpisodeDetailsDialogComponent } from "../manager-episode-details-dialog/manager-episode-details-dialog.component";
import { UUID } from 'angular2-uuid';

@Component({
  selector: "manager-tab-episodes",
  templateUrl: "tab-episodes.component.html",
  styleUrls: ["tab-episodes.component.css", "../design-common.css"],
})
export class ManagerTabEpisodesComponent implements OnInit, OnDestroy {
  podcast: Podcast;
  currentSelectedEpisode: number;

  constructor(
    private managerService: ManagerService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.managerService.podcastFeed.subscribe((x) => (this.podcast = x));
    this.podcast = this.managerService.currentPodcast;
  }

  new_clicked() {
    this.managerService.podcastEpisodeFeed.next(new PodcastEpisode());
    this.openDialog();
  }

  openDialog(): void {
    this.dialog.open<ManagerEpisodeDetailsDialogComponent, any, PodcastEpisode>(ManagerEpisodeDetailsDialogComponent, {}).afterClosed().subscribe(x => {
      if (x) {
        if (this.podcast.episodes.indexOf(this.managerService.currentPodcastEpisode) >= 0) {
          this.podcast.episodes[this.podcast.episodes.indexOf(this.managerService.currentPodcastEpisode)] = x;
        } else {
          x.fileType = 'audio/mpeg';
          x.guid = UUID.UUID().toUpperCase();
          this.podcast.episodes.push(x);
        }
        this.podcast.sortEpisodesDescending();
      }
    });
  }

  ngOnDestroy() {
    this.managerService.podcastFeed.unsubscribe();
  }

  edit(episode: PodcastEpisode) {
    this.managerService.podcastEpisodeFeed.next(episode);
    this.openDialog();
  }

  remove(episode: PodcastEpisode) {
    this.podcast.episodes.splice(this.podcast.episodes.indexOf(episode), 1);
  }
}
