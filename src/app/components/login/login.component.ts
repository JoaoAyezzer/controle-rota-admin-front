import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  hide: String = 'password';
  senhaEsquecida: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  cancelar() {
    this.senhaEsquecida = false;
  }

}
