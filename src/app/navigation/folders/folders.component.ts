import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FolderService } from '../../core/services/folder/folder.service';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss']
})
export class FoldersComponent implements OnInit {
  
  public isCollapsed = false;
  datas;

  @ViewChild('subCategories', {read: ViewContainerRef}) subCategories: ViewContainerRef;
  
  category:Observable<any>;

  constructor(private folderService: FolderService, private resolver: ComponentFactoryResolver) { }
  // constructor(private folderService: FolderService) { }


  ngOnInit() {
    console.log('from sidebar', this.datas);
  }

  showSubcategories(uri){

    this.initSubfolderSub(uri);

  }

  initSubfolderSub(uri){

    // this.category = null;
    console.log(uri);

    this.folderService.getSubfolder(uri).subscribe(
      res => {
        this.category = res.resourceLookup;
        // console.log("Category Content: " + this.category);
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
