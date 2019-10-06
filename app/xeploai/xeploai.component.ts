import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xeploai',
  templateUrl: './xeploai.component.html',
  styleUrls: ['./xeploai.component.css']
})
export class XeploaiComponent implements OnInit {
  student ={
    name:null,
    date:null,
    mark:0,
    results:''
  }
  constructor() { }

  ngOnInit() {
  }
  
  Xeploai () {
    if(this.student.mark<5)
      this.student.results="Rớt";
    else
      this.student.results="Đậu";
  }
}
