import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Third party modules
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TodoItemsListComponent } from './todo-items-list/todo-items-list.component';
import { TodoApiService } from "./services/todo-api.service";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    TodoItemsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    TodoApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
