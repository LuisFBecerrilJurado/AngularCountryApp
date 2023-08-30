import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';


@Component({
  selector: 'shared-seach-box',
  templateUrl: './seach-box.component.html',
  styles: [
  ]
})
export class SeachBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>()
  private debouncerSuscription?: Subscription;

  @Input()
  public placeHolder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {
        this.onDebounce.emit(value);
      })
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  searchTag( value: string): void{
    this.onValue.emit(value);
  }

  onKeySearch(searchTerm: string): void {
    this.debouncer.next(searchTerm);
  }
}
