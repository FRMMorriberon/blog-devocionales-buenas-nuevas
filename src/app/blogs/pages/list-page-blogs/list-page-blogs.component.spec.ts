import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPageBlogsComponent } from './list-page-blogs.component';

describe('ListPageBlogsComponent', () => {
  let component: ListPageBlogsComponent;
  let fixture: ComponentFixture<ListPageBlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPageBlogsComponent]
    });
    fixture = TestBed.createComponent(ListPageBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
