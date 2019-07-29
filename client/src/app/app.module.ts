import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { DescriptionComponent }  from './description.component';
import { DescriptionService } from './description.service';

@NgModule({
  imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule
  ],
  declarations: [
        AppComponent,
        DescriptionComponent
  ],
  providers: [
        DescriptionService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }
