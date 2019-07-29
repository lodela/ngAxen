import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'letsTalk',
  templateUrl: './letsTalk.component.html'
})
export class LetsTalkComponent implements OnInit {
  public bsModalRef: BsModalRef;
  public title:string;
  public subtitle:string;
  public closeBtnName:string;
  private ModalConfig = {
    class: 'modal-lg modal-dialog-centered contactUsmodal',
    ignoreBackdropClick: true,
  };

  constructor(private modalService: BsModalService) { }

  letsTalk(){
    const initialState = {
      title: 'Contact Us,',
      subtitle:"We're here to help!",
    };
    this.bsModalRef = this.modalService.show(ModalLetsTalk, Object.assign({initialState}, this.ModalConfig));
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'modal-content',
  templateUrl: './letsTalk.component.html',
  styleUrls: ['./letsTalk.component.scss']
})

export class ModalLetsTalk implements OnInit {
  title: string;
  subtitle: string;
  closeBtnName: string;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {}
}
