import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EventService} from "../../../core/services/event.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {of, switchMap} from "rxjs";
import {Event} from "../../../core/interface/event";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-event-blog-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl(null),
    organizedBy: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    startDate: new FormControl(null),
    endDate: new FormControl('', Validators.required),
  })

  isLoading: boolean = true;

  showModal = false;
  pageTitle = 'Event Detail'

  userData?: any

  userToken: string | null = null;
  item?: Event

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: any) => {
        if (params['id']) {
          return this.eventService.getOne(params['id'])
        }
        return of(null)
      })
    ).subscribe(res => {
      if (res) {
        this.item = res
        this.form.patchValue({...res});
        this.isLoading = false;
        this.loadUserData()
      }
    })
  }
  loadUserData(): void {
    this.authService.getUser().subscribe((data) => {
      console.log(data)
      this.userData = data.eventsSubscription;
    });
  }

  isUserSubscribedToEvent(): boolean {
    if (!this.userData || !this.item) {

    }
    return this.userData.some((event: any) => event.id === this.item?.id);
  }
  openConfirmModal() {
    console.log('Open modal called', this.showModal);
    this.showModal = true;
  }

  onModalConfirm(response: boolean) {
    this.showModal = false;

    const urlPath = window.location.pathname;
    const match = urlPath.match(/\/events\/detail\/(\d+)/);
    console.log('match', match && match[1])

    this.eventService.eventSubscribe(match && +match[1])
      .subscribe(res => {
        console.log(res)
        if (res) {
          this.router.navigate(['./profile/my-lectures'])
        } else {
          this.router.navigate(['./'])
        }
      })
  }

  onExitClick(): void {
    this.router.navigate(['./']);
  }

}
