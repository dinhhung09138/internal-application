import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private route: Router, private messageService: MessageService) { }

  ngOnInit() { }

  doLogin() {
    this.messageService.success('Hello message');
    this.route.navigate(['home', {}]);
  }

}
