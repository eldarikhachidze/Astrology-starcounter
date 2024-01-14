import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-predictions',
  templateUrl: './my-predictions.component.html',
  styleUrls: ['./my-predictions.component.scss']
})
export class MyPredictionsComponent implements OnInit {
  isLoading: boolean = true;

  ngOnInit(): void {
    this.isLoading = false;
  }


}
