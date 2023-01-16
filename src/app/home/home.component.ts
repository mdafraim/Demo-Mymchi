import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   mchi!: FormGroup
   card: any
   carrosel: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.mchi = new FormGroup({
      
    })
    this.Data(),
    this.Data1()
  }
  Data(){
    this.http.get('assets/Data.json')
    .subscribe(Response => {
      console.log(Response)
      this.card = Response;
    })
  }
  Data1(){
    this.http.get('assets/Data1.json')
    .subscribe( res => {
      console.log(res)
      this.carrosel = res;
    })
  }

}

