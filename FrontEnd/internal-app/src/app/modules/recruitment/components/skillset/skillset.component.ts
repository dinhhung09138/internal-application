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

  closeResult: string;

  constructor(private modalService: NgbModal,
              private modalConfig: NgbModalConfig) {
    modalConfig.backdrop = 'static';
    modalConfig.keyboard = true;
  }


  ngOnInit() { }

  openModal(content) {

    const modalOptions: any = {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      scrollable: false
    };

    this.modalService.open(content, modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
