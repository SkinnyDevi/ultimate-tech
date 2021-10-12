import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent implements OnInit {
  public username: string | null;
  public personalToken: number;
  public loginOption: string;

  constructor(private router: Router) {
    this.username = 'ZONA USUARIO';
    this.personalToken = 0;
    this.loginOption = 'INICIAR SESIÓN';
  }

  ngOnInit(): void {
    if (localStorage.getItem('personalToken')) {
      this.personalToken = +localStorage.getItem('personalToken')!;
    }
    if (localStorage.getItem('username')) {
      this.username = localStorage.getItem('username');
    }
    if (this.username != '' && this.personalToken != 0) {
      this.loginOption = 'CERRAR SESIÓN';
    }
  }

  goToInit() {
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }

  goToLogin() {
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

  goToSearch() {
    this.router.navigate(['/product-search']).then(() => {
      window.location.reload();
    });
  }

  goToUserSite() {
    this.router.navigate(['/user-site']).then(() => {
      window.location.reload();
    });
  }

  goToContact() {
    this.router.navigate(['/contact']).then(() => {
      window.location.reload();
    });
  }

  loginOptionCheck() {
    if (this.username != '' && this.personalToken != 0) {
      this.logout();
    } else {
      this.goToLogin();
    }
  }

  userCheck() {
    if (this.username != '' && this.personalToken != 0) {
      this.goToUserSite()
    } else {
      this.goToLogin();
    }
  }

  public logout(): void {
    if (localStorage.getItem('personalToken')) {
      localStorage.removeItem('personalToken');
      localStorage.removeItem('username');
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    }
  }
}
