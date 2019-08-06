import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruitment-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})

export class CandidateComponent implements OnInit {

  isViewDetail = false;             // false: show list of candidate, true: show detail of candidate

  constructor() {}

  ngOnInit() {
    this.isViewDetail = false;
   }

}
