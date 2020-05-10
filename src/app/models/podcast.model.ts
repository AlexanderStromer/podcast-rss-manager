import { PodcastEpisode } from "./podcast-episode.model";

export class Podcast {
  constructor(x?: Partial<Podcast>) {
    Object.assign(this, x);
  }

  title: string = null;
  description: string = null;
  author: string = null;
  website: string = null;
  email: string = null;
  language: string = null;
  explicit: boolean = null;
  imageUrl: string = null;
  category: string = null;
  titleDisplay: string = null;
  subCategory: string = null;
  type: string = null;
  copyright: string = null;
  newFeedUrl: string = null;
  block: boolean = null;
  complete: boolean = null;
  episodes: PodcastEpisode[] = [];

  sortEpisodesDescending() {
    this.episodes = this.episodes.sort((a, b) => a.publicationDate > b.publicationDate ? -1 : a.publicationDate < b.publicationDate ? 1 : 0)
  }
}
