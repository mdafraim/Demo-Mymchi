import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contact!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.contact = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }
   get name(){
    return this.contact.get('name');
   }
   get email(){
    return this.contact.get('email');
   }
   get phone(){
    return this.contact.get('phone');
   }
   get message(){
    return this.contact.get('message')
   }

  feedback(){
    console.log(this.contact)
  }

}
  