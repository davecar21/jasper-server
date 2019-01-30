import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbAlertModule,
    NgbPaginationModule
  ],
  exports: [
    NgbAlertModule,
    NgbPaginationModule
  ],
  declarations: [
  ]
})
export class NgbModules { }