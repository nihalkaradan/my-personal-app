import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  months = Array<string>();
  constructor() { 
    this.months = ['Jan','Feb','Mar']
  }

  ngOnInit(): void {
  }

}
