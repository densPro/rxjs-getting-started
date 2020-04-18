import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppData } from './app.data';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ColdObservableComponent } from './cold-observable/cold-observable.component';
import { AppRoutingModule } from './app-routing.module';
import { ColdToHotObservableComponent } from './cold-to-hot-observable/cold-to-hot-observable.component';
import { CustomOperatorFromZeroComponent } from './custom-operator-from-zero/custom-operator-from-zero.component';
import { CustomOperatorFromAnotherOperatorComponent } from './custom-operator-from-another-operator/custom-operator-from-another-operator.component';
import { MulticastOperatorsComponent } from './multicast-operators/multicast-operators.component';
import { SpecializedMulticastOperatorsComponent } from './specialized-multicast-operators/specialized-multicast-operators.component';

@NgModule({
  declarations: [
    AppComponent,
    ColdObservableComponent,
    ColdToHotObservableComponent,
    CustomOperatorFromZeroComponent,
    CustomOperatorFromAnotherOperatorComponent,
    MulticastOperatorsComponent,
    SpecializedMulticastOperatorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
