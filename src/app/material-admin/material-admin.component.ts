import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../data.interface';

@Component({
  selector: 'app-material-admin',
  templateUrl: './material-admin.component.html',
  styleUrls: ['./material-admin.component.css']
})
export class MaterialAdminComponent implements OnInit {
  @Input() data: Data;

  constructor() { }

  ngOnInit() {
  }

}
