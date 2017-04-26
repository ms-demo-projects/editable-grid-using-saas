import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DataTableModule, SharedModule, CheckboxModule, PaginatorModule} from "primeng/primeng";
import {MenuEditorComponent} from "./menu-editor/menu-editor.component";
import {SpiderRoutingModule} from "./spider-routing.module";
import {UtilityModule} from "../utility/utility.module";

@NgModule({
  imports: [
    CommonModule,
    PaginatorModule,
    DataTableModule,
    SharedModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    UtilityModule,
    SpiderRoutingModule
  ],
  declarations: [MenuEditorComponent]
})

export class SpiderModule {
}
