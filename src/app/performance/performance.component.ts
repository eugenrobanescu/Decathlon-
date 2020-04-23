import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { AthletesService } from "../athletes/athletes.service";
import { AthleteModel } from "../athletes/athlete.model";

import { AthleteChartService } from "../athletes/athlete-chart.service";

@Component({
  selector: "app-performance",
  templateUrl: "./performance.component.html",
  styleUrls: ["./performance.component.css"],
  providers: [AthletesService],
})
export class PerformanceComponent implements OnInit {
  @ViewChild("canvas", { static: true }) canvas: ElementRef;

  context;
  eventsForm: FormGroup;
  arata = false;
  athlete: AthleteModel[] = [];
  eventsAthlete: AthleteModel[] = [];
  selectedEvent;
  exempleChart;
  coco = {
    firstName: "",
    lastName: "",
    test: "",
    result1: "1",
    result2: "2",
    result3: "3",
  };

  constructor(
    private athletes: AthletesService,
    private chart: AthleteChartService
  ) {}

  ngOnInit() {
    this.eventsForm = new FormGroup({
      athletes: new FormControl(""),
      events: new FormControl(""),
    });

    this.addAthletesName();
    this.addEvent();
    this.context = <HTMLCanvasElement>this.canvas.nativeElement;
    this.exempleChart = this.chart.createChart(
      this.context.getContext("2d"),
      this.coco
    );
  }
  addAthletesName() {
    for (let ath of this.athletes.athletes) {
      const found: boolean = this.athlete.some((el) => {
        return el?.firstName == ath?.firstName && el?.lastName == ath?.lastName;
      });

      if (!found) {
        this.athlete.push(ath);
      }
    }
  }
  addEvent(): void {
    this.eventsForm.get("athletes").valueChanges.subscribe((val) => {
      this.selectedEvent = JSON.parse(val);

      const found = this.athletes.athletes.filter((el) => {
        return (
          el.firstName == this.selectedEvent.fname &&
          el.lastName == this.selectedEvent.lname
        );
      });
      this.eventsAthlete = found;
    });
  }
  onSubmit() {
    this.onCreateChart();
  }
  onCreateChart() {
    this.exempleChart.destroy();

    const event = this.eventsForm.value.events;
    let found = this.athletes.athletes.filter((el) => {
      return (
        el.firstName == this.selectedEvent.fname &&
        el.lastName == this.selectedEvent.lname &&
        el.test == event
      );
    });
    this.exempleChart = this.chart.createChart(
      this.context.getContext("2d"),
      found[0]
    );
  }
}
