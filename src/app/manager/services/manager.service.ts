import { Injectable, OnDestroy } from "@angular/core";
import { Podcast } from "../../models";
import { Subject } from "rxjs";
import { PodcastEpisode } from "../../models/podcast-episode.model";

@Injectable()
export class ManagerService implements OnDestroy {
  currentPodcast: Podcast;
  currentPodcastEpisode: PodcastEpisode;
  podcastFeed: Subject<Podcast> = new Subject<Podcast>();
  podcastEpisodeFeed: Subject<PodcastEpisode> = new Subject<PodcastEpisode>();

  constructor() {
    this.podcastFeed.subscribe(x => (this.currentPodcast = x));
    this.podcastEpisodeFeed.subscribe(x => (this.currentPodcastEpisode = x));
  }

  ngOnDestroy() {
    this.podcastFeed.unsubscribe();
    this.podcastEpisodeFeed.unsubscribe();
  }
}