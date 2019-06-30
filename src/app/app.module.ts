import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Weekly } from './weekly/weekly.comp';
import { Sunday } from './weekly/sunday.comp';
import { Monday } from './weekly/monday.comp';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'sunday',
    component: Sunday
  },
  {
    path: 'monday',
    component: Monday
  },
  {
    path: '',
    component: Weekly
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Weekly,
    Sunday,
    Monday
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
