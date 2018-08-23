import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent implements OnInit {

  @Input() title = '';
  @Output() clickButton = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // Events
  onClickButton() {
    this.clickButton.emit();
  }

}
