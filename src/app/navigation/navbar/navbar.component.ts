import { Component, OnInit, Input, Output } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SampleService } from './../../core/services/sample.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  closeResult: string;

  model;
  label;
  description;

    // sample data body

    public testData = {
      "version": 0,
      "permissionMask": 1,
      "label":'',
      "description": '',
      "uri": "/reports"
    }


  constructor(private modalService: NgbModal, private sampleservice:SampleService) { }

  open(content) {
    const modalRef = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  ngOnInit() {
    
    console.log("JSONsss: ", this.testData);
  }


  addCategory(body){
    console.log(this.label);
    console.log(this.description);

    console.log("JSON: ", this.testData);
    
    
    // this.sampleservice.samplePOST(this.sampleData).subscribe(
    //   result => console.log('samplepost result', result),
    //   error => console.log('samplepost error', error)
    // )
  } 

}
