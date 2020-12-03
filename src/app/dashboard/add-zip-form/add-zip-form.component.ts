import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AddZipEvent } from './add-zip-event.type';

@Component({
  selector: 'app-add-zip-form',
  templateUrl: './add-zip-form.component.html',
  styleUrls: ['./add-zip-form.component.scss']
})
export class AddZipFormComponent implements OnInit {

  @Output() addZip: EventEmitter<AddZipEvent> = new EventEmitter<AddZipEvent>();

  public form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      zipCode: ['', Validators.required]
    });
  }

  public handleSubmit(): void {
    this.addZip.next(this.form.value);
    this.form.reset();
  }

}
