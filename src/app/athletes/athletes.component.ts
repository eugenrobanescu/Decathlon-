import { Component, OnInit } from "@angular/core";

import { AthletesService } from "./athletes.service";
import { AthleteModel } from "./athlete.model";

@Component({
  selector: "app-athletes",
  templateUrl: "./athletes.component.html",
  styleUrls: ["./athletes.component.css"],
  providers: [AthletesService],
})
export class AthletesComponent implements OnInit {
  event: string;
  athletes: AthleteModel[] = [];
  imgTest;

  constructor(private athletesService: AthletesService) {}

  ngOnInit() {
    this.selectAthletes();
    this.athletesService.eventSent.subscribe((eventSent) => {
      this.selectAthletes(eventSent);
    });
  }

  selectAthletes(eventSent = "Long Jump") {
    this.event = eventSent;
    this.athletes = [];
    for (let athlete of this.athletesService.athletes) {
      if (athlete.test == this.event) {
        if (athlete.test == "Long Jump") {
          this.imgTest = "https://img.icons8.com/ios/50/000000/long-jump.png";
        } else if (athlete.test == "Running") {
          this.imgTest =
            "https://img.icons8.com/ios-filled/50/000000/running.png";
        } else if (athlete.test == "Pole Jump") {
          this.imgTest =
            "https://img.icons8.com/dotty/80/000000/pole-vault.png";
        } else if (athlete.test == "Shot Put") {
          this.imgTest = "https://img.icons8.com/dotty/80/000000/shot-put.png";
        } else if (athlete.test == "Swimming") {
          this.imgTest = "https://img.icons8.com/dotty/80/000000/swimming.png";
        }

        this.athletes.push(athlete);
      }
    }
  }
}
