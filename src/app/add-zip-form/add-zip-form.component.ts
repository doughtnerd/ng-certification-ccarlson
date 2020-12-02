import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddCityEvent } from './add-city-event.type';

@Component({
  selector: 'app-add-zip-form',
  templateUrl: './add-zip-form.component.html',
  styleUrls: ['./add-zip-form.component.scss']
})
export class AddZipFormComponent implements OnInit {

  @Output() addCity: EventEmitter<AddCityEvent> = new EventEmitter<AddCityEvent>();

  public form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    console.error('HEY!!! ', this.fb);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      zipCode: ['', Validators.required]
    });
  }

  public handleSubmit(event: FormGroup): void {
    this.addCity.emit(event.value);
    this.form.reset();
  }

}
