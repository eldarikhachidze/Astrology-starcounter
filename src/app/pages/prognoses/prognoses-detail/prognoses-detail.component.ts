import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {of, switchMap} from "rxjs";
import {PrognosesService} from "../../../core/services/prognoses.service";
import {Prognoses} from "../../../core/interface/prognoses";

@Component({
  selector: 'app-prognoses-detail',
  templateUrl: './prognoses-detail.component.html',
  styleUrls: ['./prognoses-detail.component.scss']
})
export class PrognosesDetailComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    description: new FormControl('', Validators.required),
  })

  isLoading: boolean = true;

  item?: Prognoses


  constructor(
    private route: ActivatedRoute,
    private prognosesService: PrognosesService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: any) => {
        if (params['id']) {

          return this.prognosesService.getOne(params['id']);
        }
        return of(null);
      })
    ).subscribe(res => {
      if (res) {
        this.item = res;
        this.form.patchValue({...res});
        this.isLoading = false;
      }
    });
  }

  onExitClick(): void {
    this.router.navigate(['./']);
  }

}
