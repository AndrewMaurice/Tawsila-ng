import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sizing',
  templateUrl: './sizing.component.html',
  styleUrls: ['./sizing.component.css']
})
export class SizingComponent implements OnInit {

  userStoriesFormGroup = new FormGroup({
    version: new FormControl(),
    userStoryName: new FormControl('', [Validators.required]),
    transactionType: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

}
