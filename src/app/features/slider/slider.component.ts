import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {SliderService} from "../../core/services/slider.service";
import {Subject, takeUntil} from "rxjs";
import {Slider} from "../../core/interface/slider";

declare var bootstrap: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Output() carouselPrev = new EventEmitter<boolean>();
  @Output() carouselNext = new EventEmitter<boolean>();
  private carousel: any;
  @Input() articles: Slider[] = [];
  activeSlideIndex = 0;
  sub$ = new Subject();

  constructor(private sliderService: SliderService) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const carouselElement = document.getElementById('carouselExampleDark');
      if (carouselElement) {
        this.carousel = new bootstrap.Carousel(carouselElement, {
          interval: 3000
        });
      }
    }, 2000);
  }

  ngOnInit(): void {
    this.getSliders();
    setInterval(() => {
      this.nextSlide()
    }, 3000)
  }

  getSliders() {
    this.sliderService.getAllSliders()
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
        this.articles = response.data;
        console.log(this.articles);
      });
  }

  previousSlide() {
    this.carousel.prev()
  }

  nextSlide() {
    this.carousel.next()
  }

  ngOnDestroy(): void {
    this.sub$.next(this.sub$);
    this.sub$.complete();
  }


}
