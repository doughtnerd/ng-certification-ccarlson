import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBackgroundComponent } from './simple-background.component';

describe('SimpleBackgroundComponent', () => {
  let component: SimpleBackgroundComponent;
  let fixture: ComponentFixture<SimpleBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
