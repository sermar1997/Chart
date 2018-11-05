import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-dropdown-chart",
  templateUrl: "./dropdown-chart.component.html",
  styleUrls: ["./dropdown-chart.component.css"]
})
export class DropdownChartComponent implements OnInit {
  @Output()
  chartTypeChanged = new EventEmitter();
  //#region properties
  charts = [
    { id: "bar-chart", name: "Bar Chart", type: "bar" },
    { id: "line-chart", name: "Line Chart", type: "line" },
    { id: "pie-chart", name: "Pie Chart", type: "pie" },
    { id: "radar-chart", name: "Radar Chart", type: "radar" },
    { id: "polar-chart", name: "Polar Chart", type: "polarArea" },
    { id: "doughnut-chart", name: "Doughnut Chart", type: "doughnut" },
    {
      id: "bar-chart-horizontal",
      name: "Horizontal Bar Chart",
      type: "horizontalbar"
    },
    { id: "funnel-chart", name: "Funnel Chart", type: "funnel" },
    { id: "gantt-chart", name: "Gantt Chart", type: "gantt" },
    {
      id: "stackedarea-chart",
      name: "Stacked Area Chart",
      type: "stackedarea"
    },
    {
      id: "montecarlo-chart",
      name: "Monte Carlo Chart",
      type: "montecarlo"
    }
  ];
  selectedChart :any;
  //#endregion
  constructor() {}
  //#region methods
  ngOnInit() {}
  onChangeChart() {
    this.chartTypeChanged.emit(this.selectedChart);
  }
  //#endregion
}
