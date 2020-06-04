import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OptionViewComponent} from 'src/app/components/option-view/option-view.component';
import {AppComponent} from 'src/app/app.component';
const routes: Routes = [
  {
    path : '',
redirectTo: '/options',
pathMatch: 'full'
  }, {
    path: "options",
component: OptionViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
