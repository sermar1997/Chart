import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.css"]
})
export class AlertComponent implements OnInit {
  //#region properties
  closed: boolean = true;
  alertMessage: string;
  //#endregion
  //#region constructor
  constructor() {}
  //#endregion
  //#region methods
  ngOnInit() {}
  showAlert(message) {
    if (message != "") {
      this.changeVisibility(this.closed);
      this.alertMessage = message;
    } else {
      this.closed = true;
    }
  }
  changeVisibility(visibility) {
    this.closed = visibility;
    if (this.closed) {
      this.closed = false;
    } else {
      this.closed = true;
    }
  }
  //#endregion
}
