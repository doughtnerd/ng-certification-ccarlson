import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-background',
  templateUrl: './simple-background.component.html',
  styleUrls: ['./simple-background.component.scss']
})
export class SimpleBackgroundComponent implements OnInit {

  @Input() public imageUrl: string = '';

  public backgroundImage: string = '';

  public ngOnInit() {
    this.backgroundImage = `url('${this.imageUrl}')`;
  }
}
