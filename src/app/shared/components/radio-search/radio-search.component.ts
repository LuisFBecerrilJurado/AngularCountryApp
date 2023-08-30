import { Component, EventEmitter, Output } from '@angular/core';
import { Region } from 'src/app/countries/interfaces/region.type';

@Component({
  selector: 'shared-radio-search',
  templateUrl: './radio-search.component.html',
  styles: [
  ]
})
export class RadioSearchComponent {
  @Output()
  public onValue = new EventEmitter<string>()

  public region: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  searchTag( value: string): void{
    this.onValue.emit(value);

  }
}
