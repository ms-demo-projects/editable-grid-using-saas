import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {Route} from "../utility/constants/routes";
import {AuthGaurd} from "../_guards/auth.gaurds";

export const routes: Routes = [
  {
    path: '',
    redirectTo: Route.LOGIN,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: Route.LOGIN,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
