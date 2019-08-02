import { Component, OnInit } from '@angular/core';
// Using bootstrap modal
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// Check modal dismiss reason
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// Config bootstrap modal
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
// Set active focus
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recruitment-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})



export class SkillSetComponent implements OnInit {

  constructor(private modalConfig: NgbModalConfig) {
    modalConfig.backdrop = 'static';
    modalConfig.keyboard = true;
  }


  ngOnInit() {
   }

}
