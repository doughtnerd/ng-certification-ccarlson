import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveCardGridListComponent } from './responsive-card-grid-list.component';

describe('ResponsiveCardGridListComponent', () => {
  let component: ResponsiveCardGridListComponent;
  let fixture: ComponentFixture<ResponsiveCardGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveCardGridListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveCardGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
