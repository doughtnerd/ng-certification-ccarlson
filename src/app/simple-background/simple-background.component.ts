import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-simple-background",
  templateUrl: "./simple-background.component.html",
  styleUrls: ["./simple-background.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleBackgroundComponent implements OnChanges {
  @Input() public imageUrl: string;

  public backgroundImage$: Observable<string>;

  public ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.imageUrl) {
      if (simpleChanges.imageUrl.firstChange) {
        this.backgroundImage$ = new BehaviorSubject<string>(simpleChanges.imageUrl.currentValue).pipe(map(url => `url(${url})`));
      } else {
        (this.backgroundImage$ as BehaviorSubject<string>).next(simpleChanges.imageUrl.currentValue);
      }
    }
  }
}
