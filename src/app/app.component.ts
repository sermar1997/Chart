import { Component, ViewChild } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { AmChartComponent } from "./am-chart/am-chart.component";
import { DropdownChartComponent } from "./dropdown-chart/dropdown-chart.component";
import { ExcelreaderComponent } from "./excelreader/excelreader.component";
import * as XLSX from "ts-xlsx";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  //#region properties
  title = "Chart Picker";
  file: any;
  @ViewChild(AlertComponent)
  alertComponent: AlertComponent;
  chartType: string;
  @ViewChild(AmChartComponent)
  amChart: AmChartComponent;
  @ViewChild(DropdownChartComponent)
  dropdown: DropdownChartComponent;
  @ViewChild(ExcelreaderComponent)
  excel: ExcelreaderComponent;
  //#endregion
  //#region methods
  fileUploaded(uploadedFile) {
    this.file = uploadedFile;
    //Pass file to chart
    if (this.file) {
      //if we haven't chart type we'll upload the file when we'll choose a chart
      if (this.chartType) {
        if (this.chartType === "montecarlo") {
          this.amChart.excel = this.file;
        } else {
          this.amChart.excel = XLSX.utils.sheet_to_json(this.file, {
            raw: true
          });
        }
        if (!this.amChart.showCanvas) {
          if (!this.alertComponent.closed)
            this.alertComponent.changeVisibility(this.alertComponent.closed);
          this.amChart.changeCanvasVisibility(this.amChart.showCanvas);
        }
      }
    } else {
      if (this.amChart.showCanvas) {
        this.amChart.changeCanvasVisibility(this.amChart.showCanvas);
      }
      if (this.amChart.Chart) this.amChart.removeChart();
    }
  }
  chartTypeChanged(dropdownChart) {
    this.chartType = dropdownChart.type;
    console.log(this.chartType)
    //if we've got an excel file
    if (this.excel.file) {
      if (this.excel.checkFile()) {
        //show chart component
        if (!this.amChart.showCanvas) {
          if (!this.alertComponent.closed)
            this.alertComponent.changeVisibility(this.alertComponent.closed);
          this.amChart.changeCanvasVisibility(this.amChart.showCanvas);
        }
        if (this.chartType === "montecarlo") {
          this.amChart.excel = this.file;
        } else {
          this.amChart.excel = XLSX.utils.sheet_to_json(this.file, {
            raw: true
          });
        }
      } else {
        this.showAlarm(
          "You have to upload an excel file to show " +
            dropdownChart.name +
            " data"
        );
      }
    } else {
      this.fileUploaded(this.file);
    }
  }
  showAlarm(message) {
    if (this.alertComponent.closed) {
      this.alertComponent.showAlert(message);
    } else {
      this.alertComponent.closed = true;
      this.showAlarm(message);
    }
  }
  //#endregion
}
