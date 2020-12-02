import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleBackgroundComponent } from './simple-background/simple-background.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherCardGridComponent } from './weather-card-grid/weather-card-grid.component';
import { AddZipFormComponent } from './add-zip-form/add-zip-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SimpleBackgroundComponent,
    WeatherCardComponent,
    WeatherCardGridComponent,
    AddZipFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
