import { Injectable } from "@angular/core";
import { Chart } from "chart.js";
import { EventEmitter } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class AthleteChartService {
  chart;
  constructor() {}
  createChart(context, el) {
    let label;
    if (
      el.test == "Long Jump" ||
      el.test == "Pole Jump" ||
      el.test == "Shot Put"
    ) {
      label = "meters";
    } else {
      label = "seconds";
    }
    return new Chart(context, {
      type: "bar",

      data: {
        labels: ["2020-01-14", "2020-01-15", "2020-01-16"],
        datasets: [
          {
            label: label,
            data: [el.result1, el.result2, el.result3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: ` ${el.firstName} ${el.lastName} - ${el.test}`,
          fontSize: 16,
        },
        tooltips: {
          position: "nearest",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                callback: function (value, index, values) {
                  return value + label;
                },
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
