import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import * as XLSX from "ts-xlsx";

@Component({
  selector: "app-excelreader",
  templateUrl: "./excelreader.component.html",
  styleUrls: ["./excelreader.component.css"]
})
export class ExcelreaderComponent implements OnInit {
  //#region constructor
  constructor() {}
  //#endregion
  //#region properties
  @Output()
  fileUploaded = new EventEmitter();
  arrayBuffer: any;
  file: File;
  jSonSheet: any;
  worksheet: any;
  //#endregion
  //#region methods
  ngOnInit() {}
  incomingfile(event) {
    this.file = event.target.files[0];
  }
  UploadFile() {
    if (!this.file) {
      alert("Upload excel file");
    } else {
      let fileReader = new FileReader();
      fileReader.onload = e => {
        this.arrayBuffer = fileReader.result;
        var data = new Uint8Array(this.arrayBuffer);
        var arr = new Array();
        for (var i = 0; i != data.length; ++i) {
          arr[i] = String.fromCharCode(data[i]);
        }
        var bstr = arr.join("");
        this.loadExcelData(bstr);
      };
      fileReader.readAsArrayBuffer(this.file);
    }
  }
  loadExcelData(bstr) {
    var workbook = XLSX.read(bstr, { type: "binary" });
    var first_sheet_name = workbook.SheetNames[0];
    this.worksheet = workbook.Sheets[first_sheet_name];
    this.jSonSheet = XLSX.utils.sheet_to_json(this.worksheet, { raw: true });
    this.fileUploaded.emit(this.jSonSheet);
  }
  //#endregion
}
