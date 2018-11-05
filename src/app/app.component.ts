import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  //#region properties
  title = "Chart Picker";
  file: any;
  //#endregion
  //#region methods
  fileUploaded(file) {
    //Pass file to chart
  }
  chartTypeChanged(dropdownChart){
    //Change chart
  }
  //#endregion
}
