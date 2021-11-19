import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  @Input() color: string = ''
  @Input() name: string = ''
  @Input() count: string = ''


  constructor() { }

  ngOnInit(): void {

  }

}
