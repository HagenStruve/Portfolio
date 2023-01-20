import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {


  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }


  async sendMail() {
    
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    //Animation hinzufügen

    let fd = new FormData();
    fd.append('name', nameField.value)
    fd.append('message', emailField.value)
    fd.append('message', messageField.value)
    //senden
    await fetch('https://hagen-struve.de/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );

    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }
}
