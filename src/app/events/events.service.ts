import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class EventsService {
  tests: {}[] = [
    {
      id: "1",
      name: "Running",
      description:
        "Is a method of terrestrial locomotion allowing humans to move rapidly on foot. The running test consists of a distance of 1000m.",
      recordResult: "3min 35s",
      recordDate: "2018-06-15",
      recordPerson: "Andrei Ionescu",
    },
    {
      id: "2",
      name: "Swimming",
      description:
        "Swimming is an individual or team racing sport that requires the use of the whole body to move through water. The basins have a length of 50m width of 21m,the water deepth over the entire length of the distance is 1.80m.",
      recordResult: "20.98s",
      recordDate: "2018-08-28",
      recordPerson: "Mihai Popescu",
    },
    {
      id: "3",
      name: "Long Jump",
      description:
        "The long jump is a track end field event in which atheltes combine speed,strength and agility in an attempt to leap as far as possible from a take off point",
      recordResult: "8.13m",
      recordDate: "2016-05-25",
      recordPerson: "Vali Ionescu",
    },
    {
      id: "4",
      name: "Pole Jump",
      description:
        "Pole jump is track and field event in which a person uses a long flexible pole as an aid to jump over a bar.",
      recordResult: "6.14m",
      recordDate: "2018-07-08",
      recordPerson: "Alin Simionescu",
    },
    {
      id: "5",
      name: "Shot Put",
      description:
        "The shot put is a track and field event involving putting a heavy sphearical ball as fa as possible. In open competions the men's weights 7.260 killograms and the women's shot weight 4 killograms",
      recordResult: "23m",
      recordDate: "2019-10-5",
      recordPerson: "Claudia Markson",
    },
  ];

  constructor() {}
}
