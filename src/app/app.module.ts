import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundColorDirective } from './background-color.directive';
import { FirstComponent } from './first/first.component';
import { FormatOutputComponent } from './format-output/format-output.component';
import { StateListComponent } from './state-list/state-list.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule here

@NgModule({
  declarations: [
    AppComponent,
    BackgroundColorDirective,
    FirstComponent,
    FormatOutputComponent,
    StateListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
