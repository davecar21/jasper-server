import { Component, OnInit } from '@angular/core';
import { FolderService } from '../../core/services/folder/folder.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public isCollapsed = false;

  folders:Observable<any>;
  category:Observable<any>;
  indexNumber:Number;

  constructor(private folderService:FolderService) { }

  ngOnInit() {
    this.folderService.getFolders().subscribe(
      result=>{
        this.folders = result.resourceLookup;
      }
    );
  }

  showSubcategories(uri, event:any, index){
    this.category = null;
    this.indexNumber = index;

    this.folderService.getSubfolder(uri).subscribe(
      res => {
        this.category = res.resourceLookup;
      },
      error => {
        console.error(error);
      }
    );
  }

}
