# Podcast RSS Manager

## Overview

Podcast RSS Manager is a free, open-source web application designed to simplify the creation and management of podcast RSS feeds. Built with Angular, it provides a user-friendly interface for podcasters to define feed metadata, manage episodes, and generate standards-compliant RSS feeds compatible with major podcast platforms including Apple Podcasts, Spotify, Google Podcasts, and other broadcasters.

The application operates entirely client-side, ensuring complete data privacy—no podcast information is ever stored on external servers.

## Key Features

- **Comprehensive Feed Management**: Configure podcast title, description, author, language, category, and artwork
- **Episode Management**: Add, edit, and organize podcast episodes with full metadata support
- **Standards Compliance**: Generate RSS feeds that meet industry standards for Apple Podcasts and other major platforms
- **Optional Field Support**: Include advanced metadata such as explicit content flags, seasonal information, and episode types
- **Privacy-First Design**: 100% client-side processing—no data collection or server storage
- **Export Functionality**: Download generated RSS feeds for immediate use
- **Intuitive Interface**: Tab-based organization with contextual help for all field types
- **No Installation Required**: Access the live application directly from your browser

## Use Cases

- **Independent Podcasters**: Manage podcast feeds without expensive subscription services
- **Small Podcasting Studios**: Maintain multiple podcast feeds with a cost-effective solution
- **Podcast Beginners**: Get started quickly without complex setup processes
- **Privacy-Conscious Creators**: Maintain full control over podcast metadata without third-party dependencies

## Getting Started

### Prerequisites

Audio files must be hosted on a cloud storage service such as:
- Amazon S3
- Google Cloud Storage
- Azure Blob Storage
- Any other HTTP-accessible media hosting service

### Live Application

The application is available online at no cost and ready to use:

**[https://alexanderstromer.github.io/podcast-rss-manager/](https://alexanderstromer.github.io/podcast-rss-manager/)**

Simply navigate to the URL and begin creating your podcast RSS feed.

### Workflow

1. **Configure Podcast Details**: Enter general information about your podcast (title, description, author, category)
2. **Add Episodes**: Create episode entries with titles, descriptions, publication dates, and media URLs
3. **Generate Feed**: The application automatically generates a valid RSS feed
4. **Export**: Download the RSS feed file and submit it to podcast directories (Apple Podcasts, Spotify, etc.)

## Development

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you modify source files.

### Running Tests

```bash
npm test
```

### Building for Production

```bash
npm run buildprod
```

The production build is optimized and ready for deployment.

### Code Quality

```bash
npm run lint
```

## Technology Stack

- **Framework**: Angular 21+
- **UI Components**: Angular Material
- **Build Tool**: Angular CLI
- **Testing**: Jasmine & Karma
- **XML Processing**: xml2js
- **Feed Serialization**: podcast-feed-serializer
- **Utilities**: RxJS, Moment.js, iso-639-1, file-saver

## Project Structure

```
src/app/
├── manager/
│   ├── header/              # Application header and navigation
│   ├── tabs/                # Main tabbed interface
│   ├── tab-general/         # Podcast metadata (required fields)
│   ├── tab-general-optional/# Additional metadata options
│   ├── tab-episodes/        # Episode management
│   ├── help/                # Contextual help sheets
│   └── services/            # Business logic and utilities
└── services/                # Application-wide services
```

## Browser Compatibility

Podcast RSS Manager works on all modern browsers that support ES2020+ JavaScript:
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+

## License

Please refer to the LICENSE file for licensing information.

## Feedback and Support

For bug reports, feature requests, or contributions, please visit the project repository.

---

**Note**: This tool is provided as-is for podcasters seeking a cost-effective, privacy-respecting alternative to commercial podcast hosting services.