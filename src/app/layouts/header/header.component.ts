import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  routeName: string;

  constructor(private route: Router) {
    let str = this.route.url;
    this.routeName = str.charAt(1).toUpperCase() + str.slice(2);
  }

  ngOnInit(): void {}
}
