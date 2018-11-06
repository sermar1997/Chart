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
  @Output()
  showAlarm = new EventEmitter();
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
      this.showAlarm.emit("You have to upload one excel file first");
    } else {
      if (this.checkFile()) {
        this.showAlarm.emit("");
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
      } else {
        this.fileUploaded.emit(null);
        this.showAlarm.emit("You must select an excel file for upload");
      }
    }
  }
  loadExcelData(bstr) {
    var workbook = XLSX.read(bstr, { type: "binary" });
    var first_sheet_name = workbook.SheetNames[0];
    this.worksheet = workbook.Sheets[first_sheet_name];
    this.fileUploaded.emit(this.worksheet);
  }
  checkFile() {
    if (this.file) {
      var fileElement = this.file.name;
      var fileExtension = "";
      if (fileElement.lastIndexOf(".") > 0) {
        fileExtension = fileElement.substring(
          fileElement.lastIndexOf(".") + 1,
          fileElement.length
        );
      }
      if (fileExtension.toLowerCase() == "xlsx") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  //#endregion
}
