import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';
@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css']
})
export class LeftnavComponent implements OnInit {
  public open = false;
  items = [{
    icon: 'desktop_windows',
    name: 'Dashboard',
    active: false
  },
  {
    icon: 'dashboard',
    name: 'Forms',
    active: false
  },
  {
    icon: 'widgets',
    name: 'UI features',
    active: false
  },
  {
    icon: 'grid_on',
    name: 'Tables',
    active: false
  }
];

constructor() { }

ngOnInit() {
}

isOn(elem) {
  if (elem === 'Forms') {
    this.open = true;
  } else if (elem === 'Dashboard') {
   this.open = false;
  }
}

}
