import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageBlogsComponent } from './pages/list-page-blogs/list-page-blogs.component';
import { AddPageBlogsComponent } from './pages/add-page-blogs/add-page-blogs.component';
import { UpdatePageBlogsComponent } from './pages/update-page-blogs/update-page-blogs.component';
import { ViewPreviouComponentComponent } from './components/view-previou-component/view-previou-component.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListPageBlogsComponent,
    AddPageBlogsComponent,
    UpdatePageBlogsComponent,
    ViewPreviouComponentComponent
  ],
  imports: [
    CommonModule,
    AngularEditorModule,
    HttpClientModule
  ],
  exports:[
    ListPageBlogsComponent,
    AddPageBlogsComponent,
    UpdatePageBlogsComponent
  ],
  providers:[]
})
export class BlogsModule { }
