import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-an-statistics-incrementor',
  templateUrl: './an-statistics-incrementor.component.html',
  styleUrls: ['./an-statistics-incrementor.component.css']
})
export class AnStatisticsIncrementorComponent implements OnInit {
  projectCount: number = 0;
  projectCountStop: any = setInterval(() => {
    this.projectCount++;
    if (this.projectCount == 284) {
      clearInterval(this.projectCountStop);
    }
  }, 80)
  constructor() { }

  ngOnInit(): void {
  }

}
