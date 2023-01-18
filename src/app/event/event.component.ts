import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  two:any;
  to:any
  three:any
  four:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.event();
    this.event1();
    this.event2();
    this.event3();
  }
  event(){
    this.http.get('assets/Data6.json')
    .subscribe(res => {
      console.log(res)
      this.two = res;
    })
  }
  event1(){
    this.http.get('assets/Data7.json')
    .subscribe( Response => {
      console.log(Response)
      this.to = Response
    })
  }
  event2(){
    this.http.get('assets/Data8.json')
    .subscribe(resp => {
      console.log(resp);
      this.three = resp;
    });
  }
  event3(){
    this.http.get('assets/Data9.json')
    .subscribe(repeat => {
      console.log(repeat);
      this.four = repeat;
    });
  }
}
