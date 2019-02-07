import { Component, OnInit } from '@angular/core';
import { FolderService } from 'src/app/core/services/folder/folder.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  folders:Observable<any>;

  constructor(private folderService:FolderService) { }

  ngOnInit() {
    this.folderService.getFolders().subscribe(
      result=>{
        this.folders = result.resourceLookup;
      }
    );
  }

}
