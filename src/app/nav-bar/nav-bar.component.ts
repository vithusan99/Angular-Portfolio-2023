import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public isshowMenu:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  showMenu(){
    this.isshowMenu= !this.isshowMenu
  }
}
