import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAv9RleqHjKbv0g9mf4ugeqDMciYUHt1dw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
