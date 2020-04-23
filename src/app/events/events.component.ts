import { Component, OnInit } from "@angular/core";
import { EventsService } from "./events.service";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.css"],
  providers: [EventsService],
})
export class EventsComponent implements OnInit {
  constructor(private events: EventsService) {}
  event: {}[] = [];
  ngOnInit() {
    this.onCreateEvents();
  }
  onCreateEvents() {
    for (let event of this.events.tests) {
      this.event.push(event);
    }
  }
}
