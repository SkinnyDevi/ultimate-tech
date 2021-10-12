import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadScriptsService } from 'src/app/shared/services/load-scripts.service';

@Component({
  selector: 'app-user-site',
  templateUrl: './user-site.component.html',
  styleUrls: ['./user-site.component.css']
})
export class UserSiteComponent implements OnInit {
  public username: string | null;
  public personalToken: number;

  constructor(private router: Router, private loadScriptsService: LoadScriptsService) {
    this.username = '';
    this.personalToken = 0;
    this.loadScriptsService.loadScripts(['gradientInvert'])
  }

  ngOnInit(): void {
    if (localStorage.getItem('personalToken')) {
      this.personalToken = +localStorage.getItem('personalToken')!;
    }
    if (localStorage.getItem('username')) {
      this.username = localStorage.getItem('username');
    }
    if (this.username == '' && this.personalToken == 0) {
      this.goToLogin()
    }
  }

  goToLogin() {
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

  logout() {
    if (localStorage.getItem('personalToken')) {
      localStorage.removeItem('personalToken');
      localStorage.removeItem('username');
      this.router.navigate(['/']).then(() => {window.location.reload()});
    }
  }

}
