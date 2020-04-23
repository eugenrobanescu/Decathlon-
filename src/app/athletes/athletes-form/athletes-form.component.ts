import { Component, OnInit } from "@angular/core";

import { FormGroup, FormControl } from "@angular/forms";
import { AthletesService } from "../athletes.service";

@Component({
  selector: "app-athletes-form",
  templateUrl: "./athletes-form.component.html",
  styleUrls: ["./athletes-form.component.css"],
})
export class AthletesFormComponent implements OnInit {
  eventsForm: FormGroup;

  constructor(private athletesService: AthletesService) {}
  ngOnInit() {
    this.eventsForm = new FormGroup({
      event: new FormControl("Long Jump"),
    });
    this.athletesService.eventSent.emit("Long Jump");
  }
  onSubmit() {
    this.athletesService.eventSent.emit(this.eventsForm.value.event);
  }
}
