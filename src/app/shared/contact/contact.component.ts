import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { bounce, fadeIn } from '../animations/animations.component';
import { ContactService } from '../../services/contact.service';

import { Contact } from '../../models/contact.model';

@Component({
  selector   : 'contactForm',
  templateUrl: './contact.component.html',
  styleUrls  : ['./contact.component.scss'],
  animations : [bounce, fadeIn]
})

export class ContactComponent implements OnInit {

  public submitted    = false;
  private requestInfo = 'AXEN IT Strategy Services';
  private options     = {
    'Digital Transformation':['AXEN IT Strategy Services'],
    'Cloud':['Azure / Iaas', 'Office 365', 'SharePoint Online'],
    'Technology Services':['Application Development','Application Modernization','Extended Teams']
  };

  model:Contact;
  error:{};

  constructor(private service:ContactService){}

  ngOnInit(){

  };

  requestContact(form:NgForm){
    this.submitted = true;
    return this.service.postMessage(form.value).subscribe(
      data  => this.model = data,
      error => this.error = error,
    );
  };

};
