import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @ViewChild('menuElement') menuElement!: ElementRef;

  showMenu(event: any) {
    const { x, y } = event;
    const top = `${y - 10}px`;
    const left = `${x + 10}px`;
    console.log(this.menuElement.nativeElement);
    this.menuElement.nativeElement.style.top = top;
    this.menuElement.nativeElement.style.left = left;
    this.menuElement.nativeElement.style.display = 'block';
    console.log('hello', top, left);
  }
}
