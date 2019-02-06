import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModules } from './shared/modules/ng-bootstrap.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// services
import { SampleService } from './core/services/sample.service'
import { AlertService } from './core/services/alert.service';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { AlertComponent } from './components/alert/alert.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlertComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    NgbModule,
    NgbModules,
    AngularFontAwesomeModule,

    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SampleService,
    AlertService
  ],
  bootstrap: [AppComponent],
  entryComponents: [NavbarComponent]
})
export class AppModule { }
