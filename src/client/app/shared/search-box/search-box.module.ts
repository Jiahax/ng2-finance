import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MdlModule } from 'angular2-mdl';
import { SearchBoxComponent } from './index';

@NgModule({
  imports: [
    CommonModule,
    MdlModule,
    ReactiveFormsModule
  ],
  declarations: [
    SearchBoxComponent
  ],
  exports: [
    SearchBoxComponent
  ]
})
export class SearchBoxModule {
}
