import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-radio-search',
  templateUrl: './radio-search.component.html',
  styles: [
  ]
})
export class RadioSearchComponent {
  @Output()
  public onValue = new EventEmitter<string>()

  public region: string[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  searchTag( value: string): void{
    this.onValue.emit(value);
    
  }
}
