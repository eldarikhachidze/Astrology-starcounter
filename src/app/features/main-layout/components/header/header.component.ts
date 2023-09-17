import { Component } from '@angular/core';
import {NzButtonSize} from "ng-zorro-antd/button";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  size: NzButtonSize = 'large';

}
