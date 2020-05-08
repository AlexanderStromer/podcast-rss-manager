import { Injectable } from "@angular/core";
import { saveAs } from "file-saver";

@Injectable()
export class FileManagementService {
  constructor() {}

  readFile(file: any): Promise<string> {
    return new Promise<string>(x => {
      var reader = new FileReader();

      reader.onload = function(e: any) {
        x(reader.result.toString());
      };

      reader.readAsText(file);
    });
  }

  saveFile(content: string) {
    saveAs(new Blob([content], {type: 'application/xml'}), "feed.xml");
  }
}
