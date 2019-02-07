import { Component, OnInit} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SampleService } from './../../core/services/sample.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoryModalComponent } from 'src/app/components/modal/category-modal/category-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  closeResult: string;
  show: false;

  createCategoryForm = new FormGroup({
    label: new FormControl(''),
    description: new FormControl('')
  });

    // sample data body

    public testData = {
      "version": 0,
      "permissionMask": 1,
      "label": '',
      "description": '',
      "uri": "/reports"
    }


  constructor(private modalService: NgbModal, private sampleservice:SampleService) { }

  openAdd() {
    const modalRef = this.modalService.open(CategoryModalComponent);
    modalRef.componentInstance.name = 'World';
  }

  // openAdd(content) {
  //   show = true;
  //   const modalRef = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }


  ngOnInit() {
    
    // console.log("JSONsss: ", this.testData);
  }


  addCategory(){

    console.log("JSON: ", this.testData);
    this.testData.label = this.createCategoryForm.value['label'];
    this.testData.description = this.createCategoryForm.value['description'];
    
    // TODO: Use EventEmitter with form value
    console.warn(this.createCategoryForm.value);
    
    this.sampleservice.samplePOST(this.testData).subscribe(
      result => console.log('samplepost result', result),
      error => console.log('samplepost error', error)
    )
  } 


}
