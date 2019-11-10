import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
	url='./assets/db/Students.json';
	taikhoan:any;
	matkhau:any;
	ListStudent=JSON.parse(localStorage.getItem('liststudent'));

	
	constructor(private http:HttpClient){}

	ngOnInit() {
		this.getData().subscribe(data=>{
			this.ListStudent=data;
		});
	}
  			
	getData() {
		return this.http.get(this.url);
	}

	Login() {
		for(var i=0; i<this.ListStudent.length;i++) 
		{
			if(this.taikhoan === this.ListStudent[i].username && this.matkhau === this.ListStudent[i].password)
			{
				location.pathname= '/object';
				localStorage.setItem('liststudent',JSON.stringify(this.ListStudent));
				return 0;
			}
		}
		alert('Tên tài khoản hoặc mật khẩu không trùng khớp');
	}
}    	   