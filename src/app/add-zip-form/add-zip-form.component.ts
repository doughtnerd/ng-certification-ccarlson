import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-zip-form',
  templateUrl: './add-zip-form.component.html',
  styleUrls: ['./add-zip-form.component.scss']
})
export class AddZipFormComponent implements OnInit {

  public form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      zipCode: ''
    });
  }

  public handleSubmit(event: any) {
    console.log(event);
  }

}
