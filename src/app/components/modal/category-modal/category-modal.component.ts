import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { SampleService } from 'src/app/core/services/sample.service';


@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.scss']
})
export class CategoryModalComponent implements OnInit {

  closeResult: string;

  createCategoryForm = new FormGroup({
    label: new FormControl(''),
    description: new FormControl('')
  });

  
  public testData = {
    "version": 0,
    "permissionMask": 1,
    "label":'',
    "description": '',
    "uri": "/reports"
  }


  constructor(public activeModal: NgbActiveModal, private sampleservice:SampleService) { }

  ngOnInit() {
   
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  
  addCategory(body){

    console.log("JSONSSS: ", this.testData);
    this.testData.label = this.createCategoryForm.value['label'];
    this.testData.description = this.createCategoryForm.value['description'];
    
    // TODO: Use EventEmitter with form value
    console.warn(this.createCategoryForm.value);
    console.log(body);
    
    this.sampleservice.samplePOST(this.testData).subscribe(
      result => console.log('samplepost result', result),
      error => console.log('samplepost error', error)
    )
  } 
  

}
