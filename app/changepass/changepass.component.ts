import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {

  Student = JSON.parse(localStorage.getItem('student'));
  ListStudent = JSON.parse(localStorage.getItem('liststudent'));
  email: "";
  username: "";
  pass = "";
  forgotpass = "";
  show = false;
  
  constructor() { }

  ngOnInit() {
  }

  Changepass() {
    let x = 0;
    if(this.pass.length > 8) {
      if(this.pass === this.forgotpass) {
        for(var i = 0; i < this.ListStudent.length; i++) {
          if(this.ListStudent[i].username === this.username && this.ListStudent[i].email === this.email) {
            this.ListStudent[i].pass = this.forgotpass;
            localStorage.setItem('liststudent', JSON.stringify(this.ListStudent));
            x = 1;
            this.show = true;
          }
        }
        if(x === 0) {
          alert('Email hoặc tên tài khoản không khớp.');
        }
        if(this.Student.username === this.username && this.Student.email === this.email) {
          this.Student.pass = this.forgotpass;
          localStorage.setItem('student', JSON.stringify(this.Student));
        }
      }
      else {
        alert('Nhập lại mật khẩu không khớp.');
      }
    }
    else {
      alert('Mật khẩu phải từ 8 kí tự trở lên.');
    }
  }
  Logout() {
    this.Student = null;
    localStorage.setItem('user', JSON.stringify(this.Student));
  }
  

}
