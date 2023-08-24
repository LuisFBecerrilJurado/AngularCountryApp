import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/countries/interfaces/country';


@Component({
  selector: 'shared-country-table',
  templateUrl: './country-table.component.html',
  styles: [
  ]
})
export class CountryTableComponent  {
  @Input()
  public countries: Country[] = []

  constructor(private router: Router) {}

  getUrl() {
    return this.router.url;
  }

}
