import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ToastsManager, ToastModule} from "ng2-toastr";
import {DataTableModule, SharedModule, CheckboxModule} from "primeng/primeng";
import {AppComponent} from "./app.component";
import {UtilityModule} from "./utility/utility.module";
import {UserAuthModule} from "./user-auth/user-auth.module";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {AuthGaurd} from "./_guards/auth.gaurds";
import {SpiderModule} from "./spider/spider.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    DataTableModule,
    SharedModule,
    CheckboxModule,
    ToastModule.forRoot(),
    UtilityModule,
    UserAuthModule,
    SpiderModule,
    AppRoutingModule
  ],
  providers: [AuthGaurd, ToastsManager],
  bootstrap: [AppComponent]
})
export class AppModule {
}
