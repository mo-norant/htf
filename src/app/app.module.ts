import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing  } from './routes/routes';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
