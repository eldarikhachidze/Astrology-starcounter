import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";
import {Prognoses} from "../../core/interface/prognoses";
import {PrognosesService} from "../../core/services/prognoses.service";

@Component({
  selector: 'app-prognoses',
  templateUrl: './prognoses.component.html',
  styleUrls: ['./prognoses.component.scss']
})
export class PrognosesComponent implements OnInit, OnDestroy {

  isLoading: boolean = true;

  prognoses: Prognoses[] = []
  sub$ = new Subject()
  pageTitle = 'Prognoses'

  constructor(
    private prognosesService: PrognosesService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);

    this.getBlogs()
  }

  getBlogs() {
    this.prognosesService.getAllPrognoses()
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
        this.prognoses = response.data
      })
  }


  ngOnDestroy() {
    this.sub$.next(this.sub$)
    this.sub$.complete()
  }

  onExitClick(): void {
    this.router.navigate(['./']);
  }

}
