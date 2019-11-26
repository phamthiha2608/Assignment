import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
	taikhoan:any;
	matkhau:any;
	ListStudent=JSON.parse(localStorage.getItem('list'));
	showlogin = false;
	
	constructor(private http:HttpClient){}

	ngOnInit() {
	}

	Login() {
		this.showlogin = false;
		for(var i=0; i<this.ListStudent.length;i++) 
		{
			if(this.taikhoan === this.ListStudent[i].username && this.matkhau === this.ListStudent[i].password)
			{
				this.showlogin = true;
				localStorage.setItem('student',JSON.stringify(this.ListStudent[i]));
				return 0;
			}
		}
		alert('Tên tài khoản hoặc mật khẩu không trùng khớp');
	}
}    	   
