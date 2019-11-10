import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';

  list:any;
  url='./assets/db/Students.json';

  constructor(private http:HttpClient) {}
  ngOnInit() {
    this.getData().subscribe(data=>{
      this.list=data
      localStorage.setItem('list',JSON.stringify(this.list))
    })
  }

  getData() {
		return this.http.get(this.url);
	}
}
