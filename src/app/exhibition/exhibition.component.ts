import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.css']
})
export class ExhibitionComponent implements OnInit {
  exhibition:any
  nine:any;
  seven:any;
  six:any
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.event();
    this.event1();
    this.event2();
    this.event3();
  }
  event(){
    this.http.get("assets/Data2.json")
    .subscribe(Res => {
      console.log(Res);
      this.exhibition = Res;
    });
  }
  event1(){
    this.http.get('assets/Data3.json')
    .subscribe(Responce => {
      console.log(Responce)
      this.nine = Responce;
    })
  }
  event2(){
    this.http.get('assets/Data4.json')
    .subscribe(Respo => {
      console.log(Respo)
      this.seven = Respo;
    })
  }
  event3(){
    this.http.get('assets/Data5.json')
    .subscribe( res => {
      console.log(res)
    this.six = res;
    })
  }
}
