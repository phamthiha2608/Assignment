import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  url='./assets/db/Subjects.json';
  listmon: any;
  Quiz: any;
  Id;
  pagesize = 1;
  pagecurrent = 1;
  totlepage;
  name : String = 'name';
  urlquiz;
  showfirth = true;
  showbegin = true;
  showlast = true;
  showend = true;
  showfinish = false;
  task = {
    "IdSubject": "",
    Ans: [],
  }
  Student = JSON.parse(localStorage.getItem('student'));
  ListStudent = JSON.parse(localStorage.getItem('list'));
  mark = 0;
  show = false;

  constructor(private http:HttpClient) { }
  
  ngOnInit() {
    this.thi();
  }
  getAllQuiz () {
    return this.http.get(this.urlquiz);
  }
  getAll () {
    return this.http.get(this.url);
  }

  next() {
    if(this.pagecurrent < this.totlepage) {
      this.pagecurrent++;
    }
    this.showbegin = true;
    this.showfirth = true;
    if(this.pagecurrent === this.totlepage) {
      this.showlast = false;
      this.showend = false;
      this.showfinish = true;
    }
    this.tinhdiem();
  }

  previrous() {
    if(this.pagecurrent > 1) {
      this.pagecurrent--;
    }
    this.showlast = true;
    this.showend = true;
    this.showfinish = false;
    if(this.pagecurrent === 1) {
      this.showbegin = false;
      this.showfirth = false;
    }
    this.tinhdiem();
  }

  home() {
    this.pagecurrent=1;
    this.showfirth = false;
    this.showbegin = false;
    this.showend = true;
    this.showlast = true;
    this.showfinish = false;
    this.tinhdiem();
  }

  end() {
    this.pagecurrent = this.totlepage;
    this.showend = false;
    this.showlast = false;
    this.showfirth = true;
    this.showbegin = true;
    this.showfinish = true;
    this.tinhdiem();
  }
  
  counttotlepage() {
    return Math.ceil(this.Quiz.length/this.pagesize);
  }

  tinhdiem() {
    this.mark = 0;
    for(var i = 0; i < this.totlepage; i++) {
      if(this.Quiz[i].AnswerId ===  Number(this.task.Ans[i])) {
        this.mark += this.Quiz[i].Marks;
      }
    }
    console.log(this.task);
  }
   finish() {
      this.tinhdiem();
      this.Student.marks = this.mark;
      for(var i = 0; i < this.ListStudent.length; i++) {
        if(this.Student.username === this.ListStudent[i].username) {
          this.ListStudent[i].marks = this.mark;
        }
      }
      localStorage.setItem('list', JSON.stringify(this.ListStudent));
      localStorage.setItem('student', JSON.stringify(this.Student));
      localStorage.setItem('task', JSON.stringify(this.task));
      this.show = true;
   }
   thi() {
    this.Id = location.href;
    this.Id = this.Id.slice(this.Id.length - 4, this.Id.length);
    this.urlquiz = './assets/db/Quizs/' + this.Id + '.json';
    this.getAllQuiz().subscribe (data=>{
      this.Quiz=data;
      this.totlepage = this.counttotlepage();
      if(this.pagecurrent === 1) {
        this.showbegin = false;
        this.showfirth = false;
      }
      if(this.pagecurrent === this.totlepage) {
        this.showend = false;
        this.showlast = false;
      }
      this.getAll().subscribe (data=>{
        this.listmon=data;
      });
    });
  }

}
