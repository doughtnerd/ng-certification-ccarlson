import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { AppComponent } from './app.component';
import { TimeAwareThemingService } from './time-aware-theming.service';

const themeBackground$ = new BehaviorSubject<string>('');
const themeClass$ = new BehaviorSubject<string>('');

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: TimeAwareThemingService,
          useValue: {
            themeBackground$,
            themeClass$
          }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('Should use the correct background', () => {
    themeBackground$.next('testBackground.png');
    fixture.detectChanges();

    const el: DebugElement = fixture.debugElement.query(By.css('[data-testid^=\'backgroundElement\']'));

    expect(el.properties.imageUrl).toEqual('testBackground.png');
  });

  it('Should use the correct theme class', () => {
    themeClass$.next('dayTheme');
    fixture.detectChanges();

    const el: DebugElement = fixture.debugElement.query(By.css('[data-testid^=\'themeHost\']'));

    expect((el.nativeElement as HTMLDivElement).className).toEqual('dayTheme');
  });

});
