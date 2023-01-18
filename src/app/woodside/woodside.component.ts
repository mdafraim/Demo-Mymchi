import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-woodside',
  templateUrl: './woodside.component.html',
  styleUrls: ['./woodside.component.css']
})
export class WoodsideComponent implements OnInit {
  carrosel:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }



}
