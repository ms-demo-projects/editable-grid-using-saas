import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./login/login.component";
import {UserAuthRoutingModule} from "./user-auth-routing.module";
import {UserAuthService} from "./user-auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UtilityModule} from "../utility/utility.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UtilityModule,
    ReactiveFormsModule,
    UserAuthRoutingModule,
  ],
  declarations: [LoginComponent],
  providers: [UserAuthService],
  exports: [LoginComponent]
})

export class UserAuthModule {
}
