import { Component, Input,OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  constructor(private formbuilder: FormBuilder){

  }
  Login : FormGroup
  ngOnInit(){
  this.Login = this.formbuilder.group({
    Username:[],
    password:[]
  })
  }
}
