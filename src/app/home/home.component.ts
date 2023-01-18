import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

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
    this.Data()
 
  }
  Data(){
    this.http.get('assets/Data.json')
    .subscribe(Response => {
      console.log(Response)
      this.card = Response;
    })
  }

}

