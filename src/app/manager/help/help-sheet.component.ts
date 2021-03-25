import { Component } from "@angular/core";

class HelpSheet {
  openHelp(): void {
    window.open(
      "https://help.apple.com/itc/podcasts_connect/#/itcb54353390",
      "_blank"
    );
  }
}

@Component({
  templateUrl: "./title-help-sheet.component.html",
  styleUrls: [".//help-sheet.component.scss"]
})
export class TitleHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./description-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class DescriptionHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./author-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class AuthorHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./category-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class CategoryHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./email-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class EmailHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./explicit-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class ExplicitHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./imageurl-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class ImageUrlHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./language-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class LanguageHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./website-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class WebsiteHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./titledisplay-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class TitleDisplayHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./subcategory-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class SubCategoryHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./type-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class TypeHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./copyright-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class CopyrightHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./newfeedurl-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class NewFeedUrlHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./block-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class BlockHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./complete-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class CompleteHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./episode-block-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class EpisodeBlockHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./episode-description-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class EpisodeDescriptionHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./episode-duration-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class EpisodeDurationHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./episode-episode-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class EpisodeEpisodeHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./episode-episodeSiteUrl-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class EpisodeEpisodeSiteUrlHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./episode-episodeUrl-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class EpisodeEpisodeUrlHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./episode-episodeType-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class EpisodeEpisodeTypeHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./episode-explicit-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class EpisodeExplicitHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./episode-imageUrl-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class EpisodeImageUrlHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./episode-length-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class EpisodeLengthHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./episode-publicationDate-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class EpisodePublicationDateHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./episode-season-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class EpisodeSeasonHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./episode-title-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class EpisodeTitleHelpSheet extends HelpSheet { }

@Component({
  templateUrl: "./episode-titleDisplay-help-sheet.component.html",
  styleUrls: ["./help-sheet.component.scss"]
})
export class EpisodeTitleDisplayHelpSheet extends HelpSheet { }