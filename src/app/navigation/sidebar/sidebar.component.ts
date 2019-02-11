import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { FolderService } from '../../core/services/folder/folder.service';
import { Observable } from 'rxjs';
import { FoldersComponent } from '../folders/folders.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild('subCategories', { read: ViewContainerRef }) subCategories: ViewContainerRef;

  public isCollapsed = false;

  folders: Observable<any>;
  category: any;

  constructor(private folderService: FolderService, private resolver: ComponentFactoryResolver) {
  }


  ngOnInit() {
    this.folderService.getFolders().subscribe(
      result => {
        this.folders = result.resourceLookup;
      }
    );
  }

  showSubcategories(uri, event: any) {

    this.initSubfolder(uri);

  }

  initSubfolder(uri) {
    this.folderService.getSubfolder(uri).subscribe(
      res => {
        this.category = res.resourceLookup;
        console.log('subFolder',this.category);
        const foldersFactory = this.resolver.resolveComponentFactory(FoldersComponent);
        const subCategories = this.subCategories.createComponent(foldersFactory);
        subCategories.instance.datas = this.category;
      },
      error => {
        console.error(error);
      }
    );
  }

}
