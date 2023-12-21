import {Component, Input} from '@angular/core';
import {Prognoses} from "../../core/interface/prognoses";

@Component({
  selector: 'app-prognoses-card',
  templateUrl: './prognoses-card.component.html',
  styleUrls: ['./prognoses-card.component.scss']
})
export class PrognosesCardComponent {

  @Input() prognoses: Prognoses = {} as Prognoses

}
