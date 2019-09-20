import { Component, OnInit } from '@angular/core';
import { BarService } from '../services/bar.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  constructor(private barService: BarService, private auth: AuthService, private router: Router) {}

  navItems$ = this.barService.options();
  ngOnInit() {}

  signout() {
    this.auth.logout();
    this.router.navigateByUrl('/signin');
  }
}
