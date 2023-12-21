import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrognosesComponent} from "./prognoses.component";
import {PrognosesDetailComponent} from "./prognoses-detail/prognoses-detail.component";

const routes: Routes = [
  {
    path: '',
    component: PrognosesComponent
  },
  {
    path: 'detail/:id',
    component: PrognosesDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrognosesRoutingModule {
}
