import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AthletesComponent } from "./athletes/athletes.component";
import { EventsComponent } from "./events/events.component";
import { PerformanceComponent } from "./performance/performance.component";
import { AthletesFormComponent } from "./athletes/athletes-form/athletes-form.component";
import { AppRoutesService } from "./app-routes.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EventsService } from "./events/events.service";
import { AthleteModel } from "./athletes/athlete.model";
import { ChartsModule } from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AthletesComponent,
    EventsComponent,
    PerformanceComponent,
    AthletesFormComponent,
  ],
  imports: [BrowserModule, AppRoutesService, ReactiveFormsModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
