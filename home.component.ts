import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = 'Angular 5';

  height = 150;
  y = 100;
  oldY = 0;
  grabber = false;


  x = 100
  oldX = 0;
  width = 150;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.grabber) {
      return;
    }
    this.resizer(event.clientY - this.oldY);
    this.oldY = event.clientY;
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.grabber = false;
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.grabber = true;
    this.oldY = event.clientY;
  }

  resizer(offsetY: number) {
    this.height += offsetY;
  }


}
