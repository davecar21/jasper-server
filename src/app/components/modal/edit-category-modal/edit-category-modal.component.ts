import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FolderService } from 'src/app/core/services/folder/folder.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-edit-category-modal',
  templateUrl: './edit-category-modal.component.html',
  styleUrls: ['./edit-category-modal.component.scss']
})
export class EditCategoryModalComponent implements OnInit {

  folders : any [];

  createCategoryForm = new FormGroup({
    label: new FormControl(''),
    description: new FormControl('')
  });
  
  constructor(public activeModal: NgbActiveModal, private folderService:FolderService) { }

  ngOnInit() {
    this.folderService.getFolders().subscribe(
      result => {
        this.folders  = result.resourceLookup;
        console.log('Search Folder Result: ',this.folders)
      } ,
      error => console.log('Search Folder Error', error)
    )

  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }


}
