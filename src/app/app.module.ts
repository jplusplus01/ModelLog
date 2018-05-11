import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {ProjectListItem} from './project_list/ListItem';
import {ProjectListContainer} from './project_list/ListContainer';
import { AppRoutingModule } from './/app-routing.module';

//import {DisplayCard} from './project_display/DisplayCard';
//import {DisplayContainer} from './project_display/DisplayContainer';


@NgModule({
  declarations: [
    AppComponent,
    ProjectListItem,
    ProjectListContainer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
