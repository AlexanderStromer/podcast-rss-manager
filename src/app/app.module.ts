import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
  ManagerHeaderComponent,
  ManagerTabComponent,
  ManagerTabGeneralComponent,
  ManagerTabGeneralOptionalComponent,
  ManagerTabEpisodesComponent,
  ManagerEpisodeDetailsDialogComponent
} from "./manager";
import {
  TitleHelpSheet,
  DescriptionHelpSheet,
  ImageUrlHelpSheet,
  LanguageHelpSheet,
  CategoryHelpSheet,
  ExplicitHelpSheet,
  AuthorHelpSheet,
  WebsiteHelpSheet,
  EmailHelpSheet,
  TitleDisplayHelpSheet,
  SubCategoryHelpSheet,
  TypeHelpSheet,
  CopyrightHelpSheet,
  NewFeedUrlHelpSheet,
  BlockHelpSheet,
  CompleteHelpSheet,
  EpisodeBlockHelpSheet,
  EpisodeDescriptionHelpSheet,
  EpisodeDurationHelpSheet,
  EpisodeEpisodeHelpSheet,
  EpisodeEpisodeSiteUrlHelpSheet,
  EpisodeEpisodeUrlHelpSheet,
  EpisodeEpisodeTypeHelpSheet,
  EpisodeExplicitHelpSheet,
  EpisodeImageUrlHelpSheet,
  EpisodeLengthHelpSheet,
  EpisodePublicationDateHelpSheet,
  EpisodeSeasonHelpSheet,
  EpisodeTitleHelpSheet,
  EpisodeTitleDisplayHelpSheet,
} from "./manager/help";
import {
  LanguageService,
  CategoryService,
  FeedSerializerService,
  FileManagementService
} from "./services";
import { FormsModule } from "@angular/forms";
import { ManagerService } from "./manager/services";

@NgModule({
  declarations: [
    AppComponent,
    ManagerHeaderComponent,
    ManagerTabComponent,
    ManagerTabGeneralComponent,
    ManagerTabGeneralOptionalComponent,
    ManagerTabEpisodesComponent,
    ManagerEpisodeDetailsDialogComponent,
    TitleHelpSheet,
    DescriptionHelpSheet,
    ImageUrlHelpSheet,
    LanguageHelpSheet,
    CategoryHelpSheet,
    ExplicitHelpSheet,
    AuthorHelpSheet,
    WebsiteHelpSheet,
    EmailHelpSheet,
    TitleDisplayHelpSheet,
    SubCategoryHelpSheet,
    TypeHelpSheet,
    CopyrightHelpSheet,
    NewFeedUrlHelpSheet,
    BlockHelpSheet,
    CompleteHelpSheet,
    EpisodeBlockHelpSheet,
    EpisodeDescriptionHelpSheet,
    EpisodeDurationHelpSheet,
    EpisodeEpisodeHelpSheet,
    EpisodeEpisodeSiteUrlHelpSheet,
    EpisodeEpisodeUrlHelpSheet,
    EpisodeEpisodeTypeHelpSheet,
    EpisodeExplicitHelpSheet,
    EpisodeImageUrlHelpSheet,
    EpisodeLengthHelpSheet,
    EpisodePublicationDateHelpSheet,
    EpisodeSeasonHelpSheet,
    EpisodeTitleHelpSheet,
    EpisodeTitleDisplayHelpSheet,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
    MatBottomSheetModule,
    FormsModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatSnackBarModule
  ],
  providers: [
    MatMomentDateModule,
    LanguageService,
    CategoryService,
    FeedSerializerService,
    FileManagementService,
    ManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
