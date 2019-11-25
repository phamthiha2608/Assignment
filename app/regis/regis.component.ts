import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent implements OnInit {

  name;
  pass = "";
  repass;
  show=false;
  formStudent = {
    "username":'',
    "address":'',
    "email":'',
    "fullname":'',
    "birthday":Date,
    "password": '',
    "gender":true
  };
  Liststudent=JSON.parse(localStorage.getItem('list'));


  constructor() { }

  ngOnInit() {
    
  }
  Register() {
    if(this.pass.length > 8) {
      if(this.pass === this.repass) {
        let check=1;
        for(var i=0; i<this.Liststudent.length; i++) {
          if(this.Liststudent[i].username === this.name) {
            alert('Tên tài khoản đã tồn tại.Vui lòng đổi tên tài khoản khác');
            check=0;
          }
        }
        if(check ===1 ) {
          this.formStudent.username=this.name;
          this.formStudent.password=this.repass;
          var a=document.getElementById('example');
          a.id ='exampleModal';
        }
      }
      else {
        alert('Nhập lại mật khẩu');
      }
    }
    else {
      alert('Mật khẩu từ 7 kí tự trở lên');
    }
    console.log(this.Liststudent);
  }


  addUser() {
    this.Liststudent.push(this.formStudent);
    localStorage.setItem('liststudent',JSON.stringify(this.Liststudent));
  }
  

}
