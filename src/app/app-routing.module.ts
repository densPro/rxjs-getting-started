import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColdObservableComponent } from './cold-observable/cold-observable.component';
import { ColdToHotObservableComponent } from './cold-to-hot-observable/cold-to-hot-observable.component';
import { CustomOperatorFromZeroComponent } from './custom-operator-from-zero/custom-operator-from-zero.component';
import { CustomOperatorFromAnotherOperatorComponent } from './custom-operator-from-another-operator/custom-operator-from-another-operator.component';
import { MulticastOperatorsComponent } from './multicast-operators/multicast-operators.component';
import { SpecializedMulticastOperatorsComponent } from './specialized-multicast-operators/specialized-multicast-operators.component';
import { SchedulersComponent } from './schedulers/schedulers.component';

export const routes: Routes = [
  {
    path: 'cold-observable',
    component: ColdObservableComponent
  },
  {
    path: 'cold-to-hot-observable',
    component: ColdToHotObservableComponent
  },
  {
    path: 'custom-operator-from-zero',
    component: CustomOperatorFromZeroComponent
  },
  {
    path: 'custom-operator-from-another-operator',
    component: CustomOperatorFromAnotherOperatorComponent
  },
  {
    path: 'multicast-operators',
    component: MulticastOperatorsComponent
  },
  {
    path: 'specialized-multicast-operators',
    component: SpecializedMulticastOperatorsComponent
  },
  {
    path: 'schedulers',
    component: SchedulersComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}

