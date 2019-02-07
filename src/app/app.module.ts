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
import { FolderService } from './core/services/folder/folder.service'

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { AlertComponent } from './components/alert/alert.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { CategoryModalComponent } from './components/modal/category-modal/category-modal.component';
import { EditCategoryModalComponent } from './components/modal/edit-category-modal/edit-category-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlertComponent,
    SidebarComponent,
    CategoryModalComponent,
    EditCategoryModalComponent
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
    AlertService,
    FolderService
  ],
  bootstrap: [AppComponent],
  entryComponents: [NavbarComponent, CategoryModalComponent, EditCategoryModalComponent]
})
export class AppModule { }
