import { RouterModule,Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component';
import { NumberTravelersComponent } from './number-travelers/number-travelers.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path: 'about', component:AboutComponent},
  {path: 'travelers',component:NumberTravelersComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    NumberTravelersComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
