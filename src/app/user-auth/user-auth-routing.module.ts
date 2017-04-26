import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {Route} from "../utility/constants/routes";
import {AuthGaurd} from "../_guards/auth.gaurds";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: Route.LOGIN,
    component: LoginComponent,
    canActivate: [AuthGaurd]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class UserAuthRoutingModule {

}
