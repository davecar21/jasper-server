import { Component } from '@angular/core';
import { SampleService } from './core/services/sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JasperReport';

  constructor(private sampleService: SampleService){
    alert('a')
    this.sampleService.sampleGet().subscribe(
      result=> console.log('sample result', result),
      error=> console.log('sample error', error)
    )
  }
}
