import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { ExcelreaderComponent } from "./excelreader/excelreader.component";
import {
  MatButtonModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DropdownChartComponent } from "./dropdown-chart/dropdown-chart.component";
import { AlertComponent } from "./alert/alert.component";
import { AmChartComponent } from "./am-chart/am-chart.component";
import { BarchartComponent } from "./am-chart/charts/barchart/barchart.component";
import { LinechartComponent } from "./am-chart/charts/linechart/linechart.component";
import { PiechartComponent } from "./am-chart/charts/piechart/piechart.component";
import { RadarchartComponent } from "./am-chart/charts/radarchart/radarchart.component";
import { PolarchartComponent } from "./am-chart/charts/polarchart/polarchart.component";
import { DoughnutchartComponent } from "./am-chart/charts/doughnutchart/doughnutchart.component";
import { HorizontalbarchartComponent } from "./am-chart/charts/horizontalbarchart/horizontalbarchart.component";
import { FunnelchartComponent } from "./am-chart/charts/funnelchart/funnelchart.component";
import { GanttchartComponent } from "./am-chart/charts/ganttchart/ganttchart.component";
import { StackedareachartComponent } from "./am-chart/charts/stackedareachart/stackedareachart.component";
import { ThreeDbarchartComponent } from "./am-chart/charts/three-dbarchart/three-dbarchart.component";
import { MontecarloComponent } from './am-chart/charts/montecarlo/montecarlo.component';

@NgModule({
  declarations: [
    AppComponent,
    ExcelreaderComponent,
    DropdownChartComponent,
    AlertComponent,
    AmChartComponent,
    MontecarloComponent,
    BarchartComponent,
    DoughnutchartComponent,
    LinechartComponent,
    ThreeDbarchartComponent,
    StackedareachartComponent,
    GanttchartComponent,
    FunnelchartComponent,
    HorizontalbarchartComponent,
    PolarchartComponent,
    RadarchartComponent,
    PiechartComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    AmChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
