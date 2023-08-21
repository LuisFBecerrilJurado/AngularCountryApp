import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-seach-box',
  templateUrl: './seach-box.component.html',
  styles: [
  ]
})
export class SeachBoxComponent {
  @Input()
  public placeHolder: string = '';
}
