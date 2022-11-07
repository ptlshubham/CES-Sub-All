import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-mbheader',
  templateUrl: './mbheader.component.html',
  styleUrls: ['./mbheader.component.css']
})
export class MbheaderComponent implements OnInit {
  public isCollapsed = true;
  isSticky: boolean = false;
  public collapsed = true;
  readMore=false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
  constructor() { }

  ngOnInit(): void {
  }
  moreOpen(){
    this.readMore=true;
  }
  displayStyle = "none";
  displayStyle1 = "none";
  displayStyle2 = "none";
  displayStyle3 = "none";
  displayStyle4 = "none";
  displayStyle5 = "none";
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
    this.displayStyle1 = "none";
    this.displayStyle2 = "none";
    this.displayStyle3 = "none";
    this.displayStyle4 = "none";
    this.displayStyle5 = "none";
  }
  openPopup1() {
    this.displayStyle1 = "block";
  }
  openPopup2() {
    this.displayStyle2 = "block";
  }
  openPopup3() {
    this.displayStyle3 = "block";
  }
  openPopup4() {
    this.displayStyle4 = "block";
  }
  openPopup5() {
    this.displayStyle5 = "block";
  }

}
