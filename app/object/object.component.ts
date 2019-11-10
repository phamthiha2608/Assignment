import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {
  
  url='./assets/db/Subjects.json';
  listmon:any;
  itemperpage =4;
  curpage =1;
  totalPage:number;
  Student = JSON.parse(localStorage.getItem('student'));

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getData().subscribe(data=>{
      this.listmon=data
      this.totalPage=Math.ceil(this.listmon.length/this.itemperpage);
    });
  }

  getData() {
    return this.http.get(this.url);
  }
  top() {
    this.curpage=1;
  }
  previous() {
    if (this.curpage > 1) {
      this.curpage-- ;
    }
  }
  next() {
    if(this.curpage<this.totalPage)
      this.curpage++ ;
  }
  bottom() {
    this.curpage=this.totalPage;
  }
  
}
