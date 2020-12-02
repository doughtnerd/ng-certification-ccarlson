import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZipFormComponent } from './add-zip-form.component';

describe('AddZipFormComponent', () => {
  let component: AddZipFormComponent;
  let fixture: ComponentFixture<AddZipFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddZipFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddZipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
