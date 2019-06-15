import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanlistComponent } from './components/planlist/planlist.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule,MatIconModule} from '@angular/material';
import { SingleTaskComponent } from './components/single-task/single-task.component';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { InsertionFieldComponent } from './components/insertion-field/insertion-field.component';
import { FilterPipe } from './pipes/filter.pipe';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    PlanlistComponent,
    SearchPipe,
    SingleTaskComponent,
    TaskTableComponent,
    InsertionFieldComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule ,
    MatTableModule,
    MatTabsModule,
    MatDatepickerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
