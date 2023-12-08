import {Component, OnDestroy, OnInit} from '@angular/core';
import {SliderService} from "../../core/services/slider.service";
import {Subject, takeUntil} from "rxjs";
import {Slider} from "../../core/interface/slider";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {
  private carousel: any;
  sliders: Slider[] = []
  sub$ = new Subject()

  constructor(
    private sliderService: SliderService
  ) {
  }

  ngOnInit(): void {
    this.getSliders()
    setInterval(() => {
      this.nextSlide()
    }, 3000)
  }
  getSliders() {
    this.sliderService.getAllSliders()
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
        this.sliders = response.data
      })
  }
  previousSlide() {
    this.carousel.prev();
  }

  nextSlide() {
    this.carousel.next();
  }

  ngOnDestroy(): void {
  }



}
