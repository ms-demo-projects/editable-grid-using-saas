import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ToastsManager} from "ng2-toastr";
import {ConnectionBackend, RequestOptions, XHRBackend} from "@angular/http";
import {NoDataComponent} from "./no-data/no-data.component";
import {ProgressHudComponent} from "./progress-hud/progress-hud.component";
import {HttpService} from "./http-service";
import {SharedService} from "./shared-service/shared.service";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ValidationComponent} from "./validation/validation.component";
import {APIManager} from "./shared-service/apimanager.service";

export function callService(backend: ConnectionBackend, options: RequestOptions, sharedService: SharedService, toastManager: ToastsManager) {
  return new HttpService(backend, options, sharedService, toastManager);
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NoDataComponent, ProgressHudComponent, PageNotFoundComponent, ValidationComponent],
  providers: [
    APIManager,
    SharedService,
    {
      provide: HttpService,
      useFactory: callService,
      deps: [XHRBackend, RequestOptions, SharedService, ToastsManager]
    }
  ],
  exports: [NoDataComponent, ProgressHudComponent, PageNotFoundComponent, ValidationComponent]
})

export class UtilityModule {
}
