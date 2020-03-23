import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landing-main',
  templateUrl: './landing-main.component.html',
  styleUrls: ['./landing-main.component.css']
})
export class LandingMainComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.auth.login();

  }

}
