import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { SampleService } from 'src/app/core/services/sample.service';
import { FolderService } from 'src/app/core/services/folder/folder.service';



@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.scss']
})
export class CategoryModalComponent implements OnInit {

  createCategoryForm = new FormGroup({
    label: new FormControl(''),
    description: new FormControl('')
  });

  
  public folderInfo = { "label":'', "description": ''}


  constructor(public activeModal: NgbActiveModal, private folderService:FolderService) { }

  ngOnInit() {
   
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  
  addCategory(){

    this.folderInfo.label = this.createCategoryForm.value['label'];
    this.folderInfo.description = this.createCategoryForm.value['description'];
    
    // TODO: Use EventEmitter with form value
    console.warn(this.createCategoryForm.value);
    
    this.folderService.createFolder(this.folderInfo).subscribe(
      result => console.log('Create Folder result', result),
      error => console.log('Create Folder error', error)
    )
  } 
  

}
