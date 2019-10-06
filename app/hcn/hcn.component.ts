import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hcn',
  templateUrl: './hcn.component.html',
  styleUrls: ['./hcn.component.css']
})
export class HCNComponent implements OnInit {
  hcn ={
    cd:null,
    cr:null,
    dt:null,
    cv:null
  }
  constructor() { }

  ngOnInit() {
  }

  Tinh () {
    this.hcn.dt=this.hcn.cd*this.hcn.cr;
    this.hcn.cv=(this.hcn.cd+this.hcn.cr)*2;
  }
}
