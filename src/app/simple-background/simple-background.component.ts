import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-simple-background',
  templateUrl: './simple-background.component.html',
  styleUrls: ['./simple-background.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleBackgroundComponent implements OnInit, OnChanges {

  @Input() public imageUrl: string;

  public backgroundImage$: Observable<string>;

  public ngOnInit(): void {
    this.backgroundImage$ = new BehaviorSubject<string>(this.imageUrl).pipe(map(url => `url(${url})`));
  }

  public ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.imageUrl) {
      (this.backgroundImage$ as BehaviorSubject<string>).next(simpleChanges.imageUrl.currentValue);
    }
  }
}
