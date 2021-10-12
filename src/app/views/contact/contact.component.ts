import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Email } from '../../shared/interfaces/email';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public emailForm: Email;

  constructor(private router: Router) {
    this.emailForm = {email: '', subject: ''};
  }

  ngOnInit(): void {
  }

  public submit(): void {
    this.router.navigate(['/']).then(() => {window.location.reload()});
	}

}
