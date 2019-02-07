import { Component, OnInit} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CategoryModalComponent } from 'src/app/components/modal/category-modal/category-modal.component';
import { EditCategoryModalComponent } from 'src/app/components/modal/edit-category-modal/edit-category-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  closeResult: string;
 
  
  constructor(private modalService: NgbModal) { }

  openAdd() {
    const modalRef = this.modalService.open(CategoryModalComponent);
  }

  openEdit() {
    const modalRef = this.modalService.open(EditCategoryModalComponent);
  }

  ngOnInit() {
  }

}
