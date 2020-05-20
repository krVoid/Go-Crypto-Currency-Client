import { Router } from "@angular/router";
import { Component } from "@angular/core";

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: "Russia",
    flag: "f/f3/.",
    area: 17075200,
    population: 146989754,
  },
  {
    name: "Canada",
    flag: "c/cf/.",
    area: 9976140,
    population: 36624199,
  },
  {
    name: "United States",
    flag: "a/a4/",
    area: 9629091,
    population: 324459463,
  },
  {
    name: "China",
    flag: "f/fa/%.",
    area: 9596960,
    population: 1409517397,
  },
];
@Component({
  selector: "app-translations",
  templateUrl: "translations-grid.component.html",
  styleUrls: ["translations-grid.component.scss"],
})
export class TranslationsGridComponent {
  public page = 1;
  public pageSize = 4;
  public collectionSize = COUNTRIES.length;

  constructor(private router: Router) {}

  get countries(): Country[] {
    return COUNTRIES.map((country, i) => ({ id: i + 1, ...country })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
}
