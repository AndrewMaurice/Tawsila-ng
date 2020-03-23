import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private auth: AuthService, private cookiesService: CookieService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.cookiesService.deleteAll();
    window.location.reload;
  }

}
