import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   mchi!: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.mchi = new FormGroup({
      
    })
  }

}
