import { Injectable, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AthletesFormComponent } from "./athletes/athletes-form/athletes-form.component";
import { AthletesComponent } from "./athletes/athletes.component";
import { WelcomeComponent } from "./welcome/welcome.component";

import { EventsComponent } from "./events/events.component";
import { PerformanceComponent } from "./performance/performance.component";
const appRoutes: Routes = [
  { path: "", component: WelcomeComponent },
  {
    path: "athletes",
    component: AthletesComponent,
  },

  { path: "events", component: EventsComponent },
  { path: "performance", component: PerformanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutesService {
  constructor() {}
}
