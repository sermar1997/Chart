import { Component, OnInit, Input } from '@angular/core';
import { AmChartsService } from "@amcharts/amcharts3-angular";

@Component({
  selector: 'app-ganttchart',
  templateUrl: './ganttchart.component.html',
  styleUrls: ['./ganttchart.component.css']
})
export class GanttchartComponent implements OnInit {
//#region properties
public Chart: any;
@Input()
excelData: any;
datasets = [];
//#endregion
constructor(private AmCharts: AmChartsService) {}

ngOnInit() {
  this.loadChart(this.excelData);
}

loadChart(data) {
  if (data) {
    for (var key in data) {
      for (var value in data[key]) {
        let dataset = {
          key: value,
          value: data[key][value]
        };
        this.datasets.push(dataset);
      }
    }
    this.Chart = this.AmCharts.makeChart("ganttdiv", this.makeGanttOptions());
    console.log(this.Chart);
  }
}
makeGanttOptions() {
  return {
    type: "gantt",
    theme: "light",
    marginRight: 70,
    addClassNames: true,
    period: "hh",
    dataDateFormat: "YYYY-MM-DD",
    balloonDateFormat: "JJ:NN",
    columnWidth: 0.5,
    valueAxis: {
      type: "date",
      minimum: 7,
      maximum: 31
    },
    graph: {
      fillAlphas: 1,
      balloonText: "<b>[[task]]</b>: [[open]] [[value]]"
    },
    rotate: true,
    categoryField: "category",
    segmentsField: "segments",
    colorField: "color",
    startDate: "2015-01-01",
    startField: "start",
    endField: "end",
    durationField: "duration",
    dataProvider: [
      {
        category: "John",
        segments: [
          {
            start: 7,
            duration: 2,
            color: "#29a329",
            task: "Task #1"
          },
          {
            duration: 2,
            color: "#ebfaeb",
            task: "Task #2"
          }
        ]
      },
      {
        category: "Smith",
        segments: [
          {
            start: 10,
            duration: 8,
            color: "#29a329",
            task: "Task #2"
          },
          {
            duration: 1,
            color: "#ebfaeb",
            task: "Task #2"
          }
        ]
      },
      {
        category: "Ben",
        segments: [
          {
            start: 12,
            duration: 4,
            color: "#29a329",
            task: "Task #1"
          },
          {
            start: 16,
            duration: 2,
            color: "#ebfaeb",
            task: "Task #2"
          }
        ]
      },
      {
        category: "Mike",
        segments: [
          {
            start: 9,
            duration: 6,
            color: "#29a329",
            task: "Task #1"
          },
          {
            duration: 4,
            color: "#ebfaeb",
            task: "Task #2"
          }
        ]
      },
      {
        category: "Lenny",
        segments: [
          {
            start: 8,
            duration: 1,
            color: "#29a329",
            task: "Task #1"
          },
          {
            duration: 4,
            color: "#ebfaeb",
            task: "Task #2"
          }
        ]
      },
      {
        category: "Julia",
        segments: [
          {
            start: 9,
            duration: 2,
            color: "#29a329",
            task: "Task #1"
          },
          {
            duration: 1,
            color: "#ebfaeb",
            task: "Task #2"
          }
        ]
      },
      {
        category: "Bob",
        segments: [
          {
            start: 9,
            duration: 8,
            color: "#29a329",
            task: "Task #2"
          },
          {
            duration: 7,
            color: "#ebfaeb",
            task: "Task #3"
          }
        ]
      },
      {
        category: "Kendra",
        segments: [
          {
            start: 11,
            duration: 5,
            color: "#29a329",
            task: "Task #2"
          },
          {
            start: 16,
            duration: 2,
            color: "#ebfaeb",
            task: "Task #4"
          }
        ]
      },
      {
        category: "Tom",
        segments: [
          {
            start: 9,
            duration: 4,
            color: "#29a329",
            task: "Task #1"
          },
          {
            duration: 3,
            color: "#ebfaeb",
            task: "Task #2"
          }
        ]
      },
      {
        category: "Kyle",
        segments: [
          {
            start: 6,
            duration: 3,
            color: "#ebfaeb",
            task: "Task #2"
          }
        ]
      },
      {
        category: "Anita",
        segments: [
          {
            start: 12,
            duration: 4,
            color: "#29a329",
            task: "Task #2"
          },
          {
            start: 16,
            duration: 2,
            color: "#ebfaeb",
            task: "Task #4"
          }
        ]
      },
      {
        category: "Jack",
        segments: [
          {
            start: 8,
            duration: 10,
            color: "#29a329",
            task: "Task #1"
          },
          {
            duration: 2,
            color: "#ebfaeb",
            task: "Task #2"
          }
        ]
      },
      {
        category: "Kim",
        segments: [
          {
            start: 12,
            duration: 2,
            color: "#29a329",
            task: "Task #2"
          },
          {
            duration: 3,
            color: "#ebfaeb",
            task: "Task #3"
          }
        ]
      },
      {
        category: "Aaron",
        segments: [
          {
            start: 18,
            duration: 2,
            color: "#29a329",
            task: "Task #2"
          },
          {
            duration: 2,
            color: "#ebfaeb",
            task: "Task #4"
          }
        ]
      },
      {
        category: "Alan",
        segments: [
          {
            start: 17,
            duration: 2,
            color: "#29a329",
            task: "Task #1"
          },
          {
            duration: 2,
            color: "#ebfaeb",
            task: "Task #2"
          }
        ]
      },
      {
        category: "Ruth",
        segments: [
          {
            start: 13,
            duration: 2,
            color: "#29a329",
            task: "Task #2"
          },
          {
            duration: 1,
            color: "#ebfaeb",
            task: "Task #3"
          }
        ]
      },
      {
        category: "Simon",
        segments: [
          {
            start: 10,
            duration: 3,
            color: "#ebfaeb",
            task: "Task #2"
          }
        ]
      }
    ],
    valueScrollbar: {
      autoGridCount: true
    },
    chartCursor: {
      cursorColor: "#55bb76",
      valueBalloonsEnabled: false,
      cursorAlpha: 0,
      valueLineAlpha: 0.5,
      valueLineBalloonEnabled: true,
      valueLineEnabled: true,
      zoomable: false,
      valueZoomable: true
    },
    export: {
      enabled: true
    }
  };
}

}
