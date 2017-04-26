import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {Route} from "../utility/constants/routes";
import {MenuEditorComponent} from "./menu-editor/menu-editor.component";
import {AuthGaurd} from "../_guards/auth.gaurds";

const routes: Routes = [
  {
    path: Route.MENU_EDITOR,
    component: MenuEditorComponent,
    canActivate: [AuthGaurd]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class SpiderRoutingModule {

}
