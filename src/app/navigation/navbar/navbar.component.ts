import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  
  openFormModal() {
    const modalRef = this.modalService.open(ModalComponent);
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

}
