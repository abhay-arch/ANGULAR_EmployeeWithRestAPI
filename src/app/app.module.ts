import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { Router ,Route, Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { DepListComponent } from './components/dep-list/dep-list.component';
import { WelcomComponent } from './components/welcom/welcom.component';

const route : Routes =[
  {path : '' , component : WelcomComponent},
  {path : 'employees' , component : EmpListComponent},
  {path : 'departments' , component : DepListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    DepListComponent,
    WelcomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(route),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
