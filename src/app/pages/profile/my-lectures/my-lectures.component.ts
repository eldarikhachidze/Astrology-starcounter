import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-my-lectures',
  templateUrl: './my-lectures.component.html',
  styleUrls: ['./my-lectures.component.scss']
})
export class MyLecturesComponent implements OnInit {
  isLoading: boolean = true;

  userId?: number;
  userData: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = +params['userId'];
      this.loadUserData();
      this.isLoading = false;
    });
  }

  loadUserData(): void {
    this.authService.getUser().subscribe((data) => {
      this.userData = data;
    });
  }

}
