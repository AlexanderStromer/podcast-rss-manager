import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatLegacyTabsModule as MatTabsModule } from "@angular/material/legacy-tabs";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { MatLegacyCheckboxModule as MatCheckboxModule } from "@angular/material/legacy-checkbox";
import { MatLegacySelectModule as MatSelectModule } from "@angular/material/legacy-select";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatLegacyTooltipModule as MatTooltipModule } from "@angular/material/legacy-tooltip";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatLegacyListModule as MatListModule } from "@angular/material/legacy-list";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyDialogModule as MatDialogModule } from "@angular/material/legacy-dialog";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
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
    FileManagementService,
    ManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
