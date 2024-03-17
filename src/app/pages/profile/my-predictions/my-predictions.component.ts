import {Component, OnDestroy, OnInit} from '@angular/core';
import {Prognoses} from "../../../core/interface/prognoses";
import {Observable, Subject, takeUntil} from "rxjs";
import {PrognosesService} from "../../../core/services/prognoses.service";
import {Router} from "@angular/router";
import {Category} from "../../../core/interface/category";
import {CategoryService} from "../../../core/services/category.service";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-my-predictions',
  templateUrl: './my-predictions.component.html',
  styleUrls: ['./my-predictions.component.scss']
})
export class MyPredictionsComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;

  prognoses: Prognoses[] = []
  categoryId?: number = 5
  zodiacId?: number
  categories$: Observable<Category[]> = this.categoryService.getAllCategories()

  sub$ = new Subject()
  zodiacSub$ = new Subject();


  constructor(
    private router: Router,
    private prognosesService: PrognosesService,
    private categoryService: CategoryService,
    private authService: AuthService
  ) {
  }


  ngOnInit(): void {
    this.getMyPrognoses()
    this.getUserZodiac()
  }

  getMyPrognoses() {
    const params = {
      categoryId: this.categoryId,
      zodiacoId: this.zodiacId
    }
    console.log(this.zodiacId)
    this.prognosesService.getMyPrognoses(params)
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
        this.prognoses = response.data
        this.isLoading = false;
      })
  }

  getUserZodiac() {
    this.authService.getUser()
      .pipe(takeUntil(this.zodiacSub$))
      .subscribe((response) => {
        this.zodiacId = response.zodiacoId;
        console.log(this.zodiacId)
      });
  }

  contentChange(event: MouseEvent) {
    const categoryId = (event.target as HTMLInputElement).id;

    if (!isNaN(Number(categoryId))) {
      this.categoryId = Number(categoryId);
    } else {

    }
    this.getUserZodiac()
    this.getMyPrognoses();
  }

  ngOnDestroy() {
    // this.sub$.next(this.zodiacSub$)
    // this.sub$.complete()
    this.sub$.next(this.sub$)
    this.sub$.complete()
  }

  onExitClick(): void {
    this.router.navigate(['./']);
  }

}
