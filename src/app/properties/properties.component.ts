import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  prop:any;
  constructor(private http: HttpClient) { }
  

  ngOnInit(): void {
    this.card();
  }

  card(){
    this.http.get('assets/Data.json')
    .subscribe( Response => {
      console.log(Response);
      this.prop = Response;
    })
  }

}
