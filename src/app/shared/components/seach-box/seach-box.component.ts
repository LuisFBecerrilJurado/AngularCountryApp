import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-seach-box',
  templateUrl: './seach-box.component.html',
  styles: [
  ]
})
export class SeachBoxComponent {
  @Input()
  public placeHolder: string = '';

  @Output()
  public onValue = new EventEmitter<string>()

  searchTag( value: string): void{
    this.onValue.emit(value);
  }
}
