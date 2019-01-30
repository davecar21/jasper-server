import { Component } from '@angular/core';
import { SampleService } from './core/services/sample.service';

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

  constructor(private sampleService: SampleService) {
    this.sampleService.sampleGet().subscribe(
      result => console.log('sample result', result),
      error => console.log('sample error', error)
    )
  }
}
