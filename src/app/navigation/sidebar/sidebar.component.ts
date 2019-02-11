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

  constructor(private folderService:FolderService) { }

  ngOnInit() {
    this.folderService.getFolders().subscribe(
      result=>{
        this.folders = result.resourceLookup;
      }
    );
  }

  showSubcategories(uri, event:any){
    console.warn(event.target.innerHTML);
    let selectedCategory = event.target.innerHTML;

    var split_string = uri.split("/");
    console.log(split_string[2]);
    this.category = null;

    this.folderService.getSubfolder(split_string[2]).subscribe(
      res => {
        this.category = res.resourceLookup;
        console.log(this.category);
      },
      error => {
        console.error(error);
      }
    );

    // TODO: Instantiation of Dynamic Components

    
  }

}
