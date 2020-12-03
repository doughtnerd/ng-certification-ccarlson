import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SimpleBackgroundComponent } from './simple-background/simple-background.component';
import { StorageService } from './storage.service';


@NgModule({
  declarations: [
    AppComponent,
    SimpleBackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule
  ],
  providers: [
    {
      provide: StorageService,
      useFactory: () => {
        return new StorageService(localStorage, (data) => JSON.stringify(data), data => JSON.parse(data));
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
