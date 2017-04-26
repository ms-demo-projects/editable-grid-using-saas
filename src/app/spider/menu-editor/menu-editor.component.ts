import {Component, OnInit, ViewContainerRef} from "@angular/core";
import {Location} from "@angular/common";
import {APIManager} from "../../utility/shared-service/apimanager.service";
import {CommonFunctions} from "../../utility/common-functions";
import {ToastsManager} from "ng2-toastr";
import {IVRList} from "./menu-editor.model";
import {Pager} from "../../utility/shared-model/pager.model";

@Component({
  selector: 'menu-editor',
  templateUrl: 'menu-editor.component.html',
  styleUrls: ['menu-editor.component.css']
})

export class MenuEditorComponent implements OnInit {

  // Profile section var
  userDetailSection: boolean = false;
  hideDetailSection: boolean = false;

  // animation var
  filterMove: boolean = true;
  showFilterDiv: boolean = false;
  bodyMove: boolean = false;
  removeBodyMove: boolean = false;
  filterIcon: boolean = true;


  // checkbox var
  selectedPriority: string[] = [];
  selectedStatus: string[] = [];
  checked: boolean = true;

  // List Datasource

  IVRList: IVRList[] = [];
  pager: Pager;
  cols: any[];

  constructor(private location: Location, private apiManager: APIManager, private toastManager: ToastsManager,
              vRef: ViewContainerRef) {
    this.toastManager.setRootViewContainerRef(vRef);
  }

  ngOnInit() {
    this.getIVRList();
  }

  getIVRList() {
    this.apiManager.getAPI().subscribe(response=> {
      this.IVRList = response.payload.data;
      this.pager = response.payload.pager;
      this.cols = [
        {field: 'companyName', header: 'Company', filter: "true", placeholder: "Search Company", editable: "true"},
        {field: 'ivrNumber', header: 'IVR Number', filter: "true", placeholder: "Search Number", editable: "true"},
        {field: 'priority', header: 'Priority', filter: "true", placeholder: "Search Priority", editable: "true"},
        {field: 'status', header: 'Status', filter: "true", placeholder: "Search IVR", editable: "true"}
      ];
      CommonFunctions.Logger("getIVRList", response);
    })
  }

  paginate(value) {
    CommonFunctions.Logger("Page value", value);
  }

  back() {
    this.location.back();
  }

  // Profile menu show function
  showUserDetailSection() {
    this.userDetailSection = true;
    this.hideDetailSection = true;
  }

  // Profile menu hide function
  hideDetailSectionEv() {
    this.userDetailSection = false;
    this.hideDetailSection = false;
  }


  // show filter function
  showFilter() {
    this.filterMove = false;
    this.showFilterDiv = true;
    this.bodyMove = true;
    this.removeBodyMove = false;
    this.filterIcon = false;
  }


  //hide animation function
  hideFilter() {
    this.showFilterDiv = false;
    this.filterMove = true;
    this.bodyMove = false;
    this.removeBodyMove = true;
    this.filterIcon = true;
  }

  // API Call
}
