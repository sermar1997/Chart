import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-am-chart",
  templateUrl: "./am-chart.component.html",
  styleUrls: ["./am-chart.component.css"]
})
export class AmChartComponent implements OnInit {
  //#region properties
  @Input()
  excel: any;
  @Input()
  type: string;
  public showCanvas = false;
  Chart: any;

  //#endregion
  constructor() {}
  //#region methods
  ngOnInit() {
    this.Chart = null;
  }
  //method to fill data, labels and colors of the chart
  fillChart(jSonSheet, type) {
    this.excel = jSonSheet;
    this.type = type;
  }
  changeCanvasVisibility(visibility) {
    this.showCanvas = visibility;
    if (this.showCanvas) {
      this.showCanvas = false;
    } else {
      this.showCanvas = true;
    }
  }
  removeChart() {
    if (this.Chart) this.Chart.destroy();
  }
  //#region deprecated
  //Each time this method will load into colors array as colors as the length of data array
  // generateRandomColors(array) {
  //   this.colors = [];
  //   for (let i = 0; i < array.length; i++) {
  //     this.colors.push(
  //       "#000000".replace(/0/g, function() {
  //         return (~~(Math.random() * 16)).toString(16);
  //       })
  //     );
  //   }
  // }
  //#endregion
  //#endregion
}
