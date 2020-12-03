import { Component, OnInit } from '@angular/core';
import { threadId } from 'worker_threads';
import { TrackedZipsService } from '../tracked-zips.service';
import { AddZipEvent } from './add-zip-form/add-zip-event.type';
import { DashboardDataService } from './dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public data$;

  constructor(private trackedZips: TrackedZipsService, private data: DashboardDataService) { }

  ngOnInit(): void {
    this.data$ = this.data.dashboardData$;
  }

  public handleAddZip(event: AddZipEvent): void {
    this.trackedZips.addZipToTracking(event.zipCode);
  }

  public handleRemove(zipCode: number): void {
    this.trackedZips.removeZipCode(zipCode);
  }
}
