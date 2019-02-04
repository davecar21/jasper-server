import { Component } from '@angular/core';
import { SampleService } from './core/services/sample.service';
import { environment } from './../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JasperReport';

  model = {
    left: true,
    middle: false,
    right: false
  };

  isCollapsed = false;

  // data body
  sampleData = {
    "version": 0,
    "permissionMask": 1,
    "label": "from Node",
    "description": "from Node",
    "uri": "/reports"
  }

  constructor(private sampleService: SampleService) {
    // consume service for get
    this.sampleService.sampleGet().subscribe(
      result => console.log('sample view category result', result),
      error => console.log('sample view category error', error)
    )
  }

  addCategory() {
    // consume service for post
    this.sampleService.samplPOST(this.sampleData).subscribe(
      result => console.log('samplepost result', result),
      error => console.log('samplepost error', error)
    )
  }
}
