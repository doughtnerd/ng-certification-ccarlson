import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddZipFormComponent } from './add-zip-form.component';

describe('AddZipFormComponent', () => {
  let component: AddZipFormComponent;
  let fixture: ComponentFixture<AddZipFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddZipFormComponent ],
      imports: [ReactiveFormsModule, FormsModule, NoopAnimationsModule],
      providers: [FormBuilder]
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

  it('Should be able to submit when a value is entered into the input', () => {
    const inputEl: DebugElement = fixture.debugElement.query(By.css('[data-testid^=\'zipCodeInput\']'));
    const submitButton: DebugElement = fixture.debugElement.query(By.css('[data-testid^=\'submitFormButton\']'));

    inputEl.nativeElement.value = '84092';
    inputEl.nativeElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(submitButton.nativeElement.disabled).toBe(false);
  });

  it('Should submit the entered form value when the form is submitted', () => {
    const formEl: DebugElement = fixture.debugElement.query(By.css('[data-testid^=\'addZipForm\']'));
    const inputEl: DebugElement = fixture.debugElement.query(By.css('[data-testid^=\'zipCodeInput\']'));

    inputEl.nativeElement.value = '84092';
    inputEl.nativeElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const spy = jest.spyOn(component.addZip, 'next');

    formEl.nativeElement.dispatchEvent(new Event('submit'));

    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith({zipCode: '84092'});
  });
});
