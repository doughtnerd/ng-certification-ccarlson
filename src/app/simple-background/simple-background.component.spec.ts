import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { SimpleBackgroundComponent } from "./simple-background.component";

describe("SimpleBackgroundComponent", () => {
  let component: SimpleBackgroundComponent;
  let fixture: ComponentFixture<SimpleBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleBackgroundComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleBackgroundComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should display the background", () => {
    component.ngOnChanges({
      imageUrl: {
        currentValue: "/assets/day-sky-vector.jpg",
        previousValue: "",
        firstChange: true,
        isFirstChange: () => true,
      },
    });

    fixture.detectChanges();
    const el: DebugElement = fixture.debugElement.query(By.css("[data-testid^='backgroundHost']"));

    expect(el.styles.backgroundImage).toEqual("url(/assets/day-sky-vector.jpg)");
  });
});
