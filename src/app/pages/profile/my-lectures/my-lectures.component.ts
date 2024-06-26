import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../core/services/auth.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-my-lectures',
  templateUrl: './my-lectures.component.html',
  styleUrls: ['./my-lectures.component.scss']
})
export class MyLecturesComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;
  userId?: number;
  userData: any;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => {
        this.userId = +params['userId'];
        this.loadUserData();
      });
  }

  loadUserData(): void {
    this.authService.getUser().subscribe((data) => {
      this.userData = data.eventsSubscription.map((item: any) => item.event).reverse();
      this.isLoading = false
    });
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
