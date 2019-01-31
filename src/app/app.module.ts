import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModules } from './shared/modules/ng-bootstrap.module';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

// services
import { SampleService } from './core/services/sample.service'
import { AlertService } from './core/services/alert.service';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { AlertComponent } from './components/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    NgbModule,
    NgbModules,

    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SampleService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
