import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  descriptionSection1 = 'Reduce the effort done in sizing using the latest technologies to implement a robust solution to minimize the effort.';
  imgSection1 = '../../../assets/images/agenda-153555.svg';

  // tslint:disable-next-line: max-line-length
  descriptionSection2 = 'View statistics from the statring date of writing a PDD/SDD to the time to makrket date to provide govrnance on the bot development process.';
  imgSection2 = '../../../assets/images/gui-2311261.svg';
  constructor() { }

  ngOnInit() {
  }

}
