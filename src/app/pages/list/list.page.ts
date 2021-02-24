import { Component, OnInit, ViewChild } from '@angular/core';
import { IonItemSliding, IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList) ionList: IonList;

  usuarios: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  favorite = (item) => {
    console.log('favorite', item);
    this.ionList.closeSlidingItems();
  }

  share = (item) => {
    console.log('share', item);
    this.ionList.closeSlidingItems();
  }

  delete = (item) => {
    console.log('delete', item);
    this.ionList.closeSlidingItems();
  }

}
