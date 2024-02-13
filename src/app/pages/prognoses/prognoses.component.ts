import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, takeUntil} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {Prognoses} from "../../core/interface/prognoses";
import {PrognosesService} from "../../core/services/prognoses.service";
import {Category} from "../../core/interface/category";
import {CategoryService} from "../../core/services/category.service";

@Component({
  selector: 'app-prognoses',
  templateUrl: './prognoses.component.html',
  styleUrls: ['./prognoses.component.scss']
})
export class PrognosesComponent implements OnInit, OnDestroy {

  isLoading: boolean = true;
  prognoses: Prognoses[] = []
  categoryId?: number = 5
  categories$: Observable<Category[]> = this.categoryService.getAllCategories()
  sub$ = new Subject()
  pageTitle = 'Prognoses'

  constructor(
    private prognosesService: PrognosesService,
    private categoryService: CategoryService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getPrognoses();
  }

  getPrognoses() {
    const params = {
      categoryId: this.categoryId,
      limit: 12
    }
    this.prognosesService.getAllPrognoses(params)
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
        this.prognoses = response.data
        this.isLoading = false;
      })
  }


  contentChange(event: MouseEvent) {
    const categoryId = (event.target as HTMLInputElement).id; // Adjust the type based on your HTML structure

    if (!isNaN(Number(categoryId))) {
      this.categoryId = Number(categoryId);
    } else {

    }
    this.getPrognoses();
  }

  ngOnDestroy() {
    this.sub$.next(this.sub$)
    this.sub$.complete()
  }

  onExitClick(): void {
    this.router.navigate(['./']);
  }

}
