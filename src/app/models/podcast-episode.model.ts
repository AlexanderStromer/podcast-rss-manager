export class PodcastEpisode {
  constructor(x?: Partial<PodcastEpisode>) {
    Object.assign(this, x);
  }

  title: string = null;
  episodeUrl: string = null;
  length: number = null;
  fileType: string = null;
  guid: string = null;
  publicationDate: Date = null;
  description: string = null;
  duration: number = null;
  imageUrl: string = null;
  explicit: boolean = null;
  titleDisplay: string = null;
  episode: number = null;
  season: number = null;
  episodeType: string = null;
  block: boolean = null;
  episodeSiteUrl: string = null;
}
