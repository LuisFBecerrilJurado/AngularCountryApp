import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { compileNgModule } from '@angular/compiler';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';
import { Translation } from '../../interfaces/translation';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country;
  public translations: Translation[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchCountryById(id)))
      .subscribe(country => {

        if (!country) return this.router.navigateByUrl('');
        return this.country = country
        // return;
      });
  }

}

