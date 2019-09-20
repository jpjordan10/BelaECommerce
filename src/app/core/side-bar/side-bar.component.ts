import { Component, OnInit } from '@angular/core';
import { BarService } from '../services/bar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  constructor(private barService: BarService) {}

  navItems$ = this.barService.options();
  ngOnInit() {}
}
