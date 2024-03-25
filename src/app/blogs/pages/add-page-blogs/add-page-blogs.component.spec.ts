import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPageBlogsComponent } from './add-page-blogs.component';

describe('AddPageBlogsComponent', () => {
  let component: AddPageBlogsComponent;
  let fixture: ComponentFixture<AddPageBlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPageBlogsComponent]
    });
    fixture = TestBed.createComponent(AddPageBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
