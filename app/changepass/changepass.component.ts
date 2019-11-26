import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {

  Student = JSON.parse(localStorage.getItem('student'));
  ListStudent = JSON.parse(localStorage.getItem('list'));
  email: "";
  username: "";
  Newpass = "";
  Renewpass = "";
  show = false;

  constructor() { }

  ngOnInit() {
  }

  Changepass() {
    let x = 0;
    if(this.Newpass.length > 7) {
      if(this.Newpass === this.Renewpass) {
        for(var i = 0; i < this.ListStudent.length; i++) {
          if(this.ListStudent[i].username === this.username && this.ListStudent[i].email === this.email) {
            this.ListStudent[i].password = this.Renewpass;
            localStorage.setItem('list', JSON.stringify(this.ListStudent));
            x = 1;
            this.show = true;
          }
        }
        if(x === 0) {
          alert('Email hoặc tên tài khoản không khớp.');
        }
        if(this.Student.username === this.username && this.Student.email === this.email) {
          this.Student.password = this.Renewpass;
          localStorage.setItem('student', JSON.stringify(this.Student));
        }
      }
      else {
        alert('Nhập lại mật khẩu không khớp.');
      }
    }
    else {
      alert('Mật khẩu phải từ 7 kí tự trở lên.');
    }
  }
  Logout() {
    this.Student = null;
    localStorage.setItem('student', JSON.stringify(this.Student));
  }
}
