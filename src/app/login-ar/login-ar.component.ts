import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-ar',
  templateUrl: './login-ar.component.html',
  styleUrls: ['./login-ar.component.css']
})
export class LoginArComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}