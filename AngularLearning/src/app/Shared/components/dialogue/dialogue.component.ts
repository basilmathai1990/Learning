import { Component, OnInit, Input, Output, OnChanges, EventEmitter, TemplateRef } from '@angular/core';

import { trigger, state, style, animate, transition, } from '@angular/animations';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class DialogueComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Input() template:TemplateRef<any>;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}