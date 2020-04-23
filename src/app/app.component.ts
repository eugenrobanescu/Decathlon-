import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = "Decathlon";
  locationPath: string;
  constructor() {}
  ngOnInit() {}
}
