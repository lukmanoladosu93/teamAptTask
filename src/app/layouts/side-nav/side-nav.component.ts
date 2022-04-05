import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  bigNav = true;
  constructor() {}

  ngOnInit(): void {}

  toggleNav() {
    $('#menu-toggler').click(() => {
      if ($('#sideNav').css('width') === '250px') {
        $('#sideNav').css('width', '100px');
        $('#main').css('margin-left', '100px');
        $('#app-header').css('margin-left', '100px');
        this.bigNav = false;
      } else {
        $('#sideNav').css('width', '250px');
        $('#main').css('margin-left', '250px');
        $('#app-header').css('margin-left', '250px');
        this.bigNav = true;
      }
    });
  }
}
