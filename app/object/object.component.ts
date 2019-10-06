import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {
  card = 
    [
      {
          "Id": "ADAV",
          "Name": "Lập trình Android nâng cao",
          "Image": "ADAV.jpg"
      },
      {
          "Id": "WEBU",
          "Name": "Xây dựng trang web",
          "Image": "WEBU.jpg"
      },
      {
          "Id": "DBBS",
          "Name": "Cơ sở dữ liệu",
          "Image": "DBBS.png"
      },
      {
        "Id": "DBAV",
        "Name": "SQL Server",
        "Image": "DBAV.png"
      },
      {
          "Id": "ADBS",
          "Name": "Lập trình Android cơ bản",
          "Image": "ADBS.jpg"
      },
      {
          "Id": "ADTE",
          "Name": "Kiểm thử và triển khai ứng dụng Android",
          "Image": "ADTE.jpg"
      },
      {
          "Id": "ADUI",
          "Name": "Thiết kế giao diện trên Android",
          "Image": "ADUI.jpg"
      },
      {
          "Id": "ASNE",
          "Name": "Lập trình ASP.NET",
          "Image": "ASNE.png"
      },
      {
          "Id": "CLCO",
          "Name": "Điện toán đám mây",
          "Image": "CLCO.jpg"
      },
      {
          "Id": "GAME",
          "Name": "Lập trình game 2D",
          "Image": "GAME.png"
      },
      {
          "Id": "HTCS",
          "Name": "HTML5 và CSS3",
          "Image": "HTCS.jpg"
      },
      {
          "Id": "INMA",
          "Name": "Internet Marketing",
          "Image": "INMA.jpg"
      },
      {
          "Id": "JAAV",
          "Name": "Lập trình Java nâng cao",
          "Image": "JAAV.png"
      },
      {
          "Id": "JABS",
          "Name": "Lập trình hướng đối tượng với Java",
          "Image": "JABS.png"
      },
      {
          "Id": "JSPR",
          "Name": "Lập trình JavaScript",
          "Image": "JSPR.png"
      },
      {
          "Id": "LAYO",
          "Name": "Thiết kế layout",
          "Image": "LAYO.jpg"
      },
      {
          "Id": "MOWE",
          "Name": "Thiết kế web cho điện thoại di động",
          "Image": "MOWE.png"
      },
      {
          "Id": "PHPP",
          "Name": "Lập trình PHP",
          "Image": "PHPP.png"
      },
      {
          "Id": "PMAG",
          "Name": "Quản lý dự án với Agile",
          "Image": "PMAG.jpg"
      },
      {
          "Id": "VBPR",
          "Name": "Lập trình VB.NET",
          "Image": "VBPR.png"
      }
  ]
  
  itemperpage =4;
  curpage =1;
  totalPage:number;
  constructor() { }

  ngOnInit() {
    this.totalPage=Math.ceil(this.card.length/this.itemperpage);
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
