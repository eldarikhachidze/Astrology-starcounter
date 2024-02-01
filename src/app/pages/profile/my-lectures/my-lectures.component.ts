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
  eventSubscribeId?: number

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
        this.isLoading = false
    });
  }

  loadUserData(): void {
    this.authService.getUser().subscribe((data) => {
      this.userData = data;
      this.extractEventSubscribeId();
    });
  }

  extractEventSubscribeId(): void {
    this.authService.getUser().subscribe((data) => {
      this.eventSubscribeId = data.eventsSubscription[0].id;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
