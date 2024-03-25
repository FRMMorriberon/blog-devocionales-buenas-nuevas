import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePageBlogsComponent } from './update-page-blogs.component';

describe('UpdatePageBlogsComponent', () => {
  let component: UpdatePageBlogsComponent;
  let fixture: ComponentFixture<UpdatePageBlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePageBlogsComponent]
    });
    fixture = TestBed.createComponent(UpdatePageBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
