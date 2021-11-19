import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponentComponent implements OnInit {

  @Input() title: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
