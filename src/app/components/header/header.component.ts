import { ScrapeService } from '@services/scrape.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { User } from '@shared/models/User.Model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  collapsed = true;

  constructor(
    private router: Router,
    private authService: AuthService) {
    this.authService.currentUser.subscribe(x => {
         this.currentUser = x;
      });
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
