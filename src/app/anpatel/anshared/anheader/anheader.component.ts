import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-anheader',
  templateUrl: './anheader.component.html',
  styleUrls: ['./anheader.component.css']
})
export class AnheaderComponent implements OnInit {
  public isCollapsed = true;
  isSticky: boolean = false;
  public collapsed = true;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
