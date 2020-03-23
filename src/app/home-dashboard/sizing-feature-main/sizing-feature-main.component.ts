import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sizing-feature-main',
  templateUrl: './sizing-feature-main.component.html',
  styleUrls: ['./sizing-feature-main.component.css']
})
export class SizingFeatureMainComponent implements OnInit {

  @Input() description: string;
  @Input() imgUrl: string;
  @Input() inverse: any;

  constructor() { }

  ngOnInit() {
  }

}
