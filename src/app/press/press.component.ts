import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.css']
})
export class PressComponent implements OnInit {
   one:any;
   two:any
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.press();
    this.press1();
  }
  press(){
    this.http.get('assets/Data10.json')
    .subscribe(res => {
      console.log(res);
      this.one = res;
    });
  }
  press1(){
    this.http.get('assets/Data11.json')
    .subscribe(Response => {
      console.log(Response);
      this.two = Response;
    });
  }

}
