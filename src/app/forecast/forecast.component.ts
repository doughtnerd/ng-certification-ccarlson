import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { ForecastData } from '../shared/forecast-data.type';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  public cityForecastData: ForecastData;

  constructor(public router: ActivatedRoute) { }

  ngOnInit(): void {
    this.cityForecastData = this.router.snapshot.data.forecast;
  }

}
