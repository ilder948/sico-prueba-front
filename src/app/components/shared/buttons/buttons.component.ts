import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Input() title: string = ''
  @Input() colorButton: string = ''
  @Input() buttonType: string = ''
  @Input() link: string = ''


  constructor() { }

  ngOnInit(): void {
  }

}
