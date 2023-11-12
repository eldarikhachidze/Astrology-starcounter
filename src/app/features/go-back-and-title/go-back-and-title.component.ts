import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-go-back-and-title',
  templateUrl: './go-back-and-title.component.html',
  styleUrls: ['./go-back-and-title.component.scss']
})
export class GoBackAndTitleComponent {
  @Input() title: any;
  @Output() exitClicked = new EventEmitter<void>();

  onExitClick() {
    this.exitClicked.emit();
  }
}
