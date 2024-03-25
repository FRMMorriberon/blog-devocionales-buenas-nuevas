import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPreviouComponentComponent } from './view-previou-component.component';

describe('ViewPreviouComponentComponent', () => {
  let component: ViewPreviouComponentComponent;
  let fixture: ComponentFixture<ViewPreviouComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPreviouComponentComponent]
    });
    fixture = TestBed.createComponent(ViewPreviouComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
