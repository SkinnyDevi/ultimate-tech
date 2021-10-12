import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import {LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User;

  constructor(private router: Router, private loginService: LoginService) {
    this.user = {username: '', password: ''};
  }

  ngOnInit(): void {
  }

  public submit(): void {
		this.loginService.login(this.user).subscribe((data: number) => {
				localStorage.setItem('username', this.user.username);
				localStorage.setItem('personalToken',`${ data }`);
				this.router.navigate(['/user-site']).then(() => {window.location.reload()});
			}
		)
	}
}
