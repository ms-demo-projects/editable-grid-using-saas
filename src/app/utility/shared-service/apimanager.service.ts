import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {ToastsManager} from "ng2-toastr";
import {Response, Http} from "@angular/http";
import {HttpService} from "../http-service";

@Injectable()
export class APIManager {

  constructor(private http: Http, private httpService: HttpService, private toastManager: ToastsManager) {
  }

  getAPI(endPoint?) {
    // return this.httpService.get(endPoint).map(res => this.extractData(res, false));
    return this.http.request('app/spider/menu-editor/menu-editior.json').map(res => this.extractData(res, false));
  }

  postAPI(endPoint, params, photos?): Observable<any> {
    if (photos == null) {
      return this.httpService.post(endPoint, params).map(res => this.extractData(res, true));
    } else {
      let imgFiles = [
        {"reqKey": "image", "files": photos},
      ];
      return this.httpService.postWithFile(endPoint, params, imgFiles).map(res => this.extractData(res, true));
    }
  }

  putAPI(endPoint, params) {
    return this.httpService.put(endPoint, params).map(res => this.extractData(res, true));
  }

  deleteAPI(endPoint) {
    return this.httpService.delete(endPoint).map(res => this.extractData(res, true));
  }

  private extractData(res: Response, show?: boolean) {
    let data = res.json();
    let msg = data.message;
    if (show && msg) {
      this.toastManager.clearAllToasts()
      this.toastManager.success(msg);
    }
    return data || {};
  }
}
