import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// modules
import { AppRoutingModule } from './app-routing.module';
import { NgMatModules } from './shared/modules/ng-material.module';
import { HttpClientModule } from '@angular/common/http';

// services
import { SampleService } from './core/services/sample.service'

// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMatModules,
    HttpClientModule
  ],
  providers: [
    SampleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
