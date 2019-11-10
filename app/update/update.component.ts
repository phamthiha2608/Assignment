import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  Student = JSON.parse(localStorage.getItem('student'));
  ListStudent = JSON.parse(localStorage.getItem('liststudent'))
  showfullnamebt = true;
  showfullname = true;
  showemailbt = true;
  showemail = true;
  showbirthdaybt = true;
  showbirthday = true;
  showgenderbt = true;
  showgender = true;

  constructor() { }

  ngOnInit() {
  }

  Upshowfullname() {
    this.showfullnamebt = false;
    this.showfullname = false;
  }
  Upfullname() {
    this.showfullnamebt = true;
    this.showfullname = true;
    localStorage.setItem('student', JSON.stringify(this.Student));
    for(var i = 0; i < this.ListStudent.length; i++) {
      if(this.ListStudent[i].username === this.Student.username) {
        this.ListStudent[i].fullname = this.Student.fullname;
      }
    }
    localStorage.setItem('liststudent', JSON.stringify(this.ListStudent));
  }

  Upshowemail() {
    this.showemailbt = false;
    this.showemail = false;
  }
  Upemail() {
    this.showemailbt = true;
    this.showemail = true;
    localStorage.setItem('student', JSON.stringify(this.Student));
    for(var i = 0; i < this.ListStudent.length; i++) {
      if(this.ListStudent[i].username === this.Student.username) {
        this.ListStudent[i].email = this.Student.email;
      }
    }
    localStorage.setItem('liststudent', JSON.stringify(this.ListStudent));
  }

  Upshowbirthday() {
    this.showbirthdaybt = false;
    this.showbirthday = false;
  }
  Upbirthday() {
    this.showbirthdaybt = true;
    this.showbirthday = true;
    localStorage.setItem('student', JSON.stringify(this.Student));
    for(var i = 0; i < this.ListStudent.length; i++) {
      if(this.ListStudent[i].username === this.Student.username) {
        this.ListStudent[i].birthday = this.Student.birthday;
      }
    }
    localStorage.setItem('liststudent', JSON.stringify(this.ListStudent));
  }

  Upshowgender() {
    this.showgenderbt = false;
    this.showgender = false;
  }
  Upgender() {
    this.showgenderbt = true;
    this.showgender = true;
    localStorage.setItem('student', JSON.stringify(this.Student));
    for(var i = 0; i < this.ListStudent.length; i++) {
      if(this.ListStudent[i].username === this.Student.username) {
        this.ListStudent[i].gender = this.Student.gender;
      }
    }
    localStorage.setItem('liststudent', JSON.stringify(this.ListStudent));
  }

  Logout() {
    this.Student = null;
    localStorage.setItem('student', JSON.stringify(this.Student));
  }

}
