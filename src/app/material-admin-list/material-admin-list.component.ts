import { Component, OnInit } from '@angular/core';
import { Data } from '../data.interface';

@Component({
  selector: 'app-material-admin-list',
  templateUrl: './material-admin-list.component.html',
  styleUrls: ['./material-admin-list.component.css']
})
export class MaterialAdminListComponent implements OnInit {

 data: Data[] = [{
    icon: 'group_add',
    number: 77,
    name: 'New projects',
    color: 'DarkRed '
  },
  {
    icon: 'local_shipping',
    number: 777,
    name: 'Total Sales',
    color: 'LightSeaGreen '
  },
  {
    icon: 'local_activity',
    number: 7,
    name: 'Open Tickets',
    color: 'Orange'
  },
  {
    icon: 'person_add',
    number: 777,
    name: 'New Visitors',
    color: 'DarkGreen'
  }
];

  constructor() { }

  ngOnInit() {
  }

}
