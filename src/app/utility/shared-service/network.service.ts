import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Response, URLSearchParams} from "@angular/http";
import {API} from "../constants/api";
import {HttpService} from "../http-service";
import {ToastsManager} from "ng2-toastr";

@Injectable()
export class NetworkService {

    constructor(private httpService: HttpService, private toastManager: ToastsManager) {
    }

    getListAPI(apiEndpoint: API,queryParam? : any ,searchParam?: any): Observable<any> {
        (searchParam) ? queryParam["search"] = JSON.stringify(searchParam) : ""
        let params = new URLSearchParams();
        for (let key in queryParam) { params.set(key, queryParam[key]) }
        return this.httpService.get(apiEndpoint + "?" +  params.toString()).map(res => this.extractData(res, false));
    }

    getDetailApi(apiEndpoint: string, id?: number): Observable<any> {
        let endPoint = "";
        if (id) {
            endPoint = apiEndpoint + "/" + id;
        } else {
            endPoint = apiEndpoint;
        }

        return this.httpService.get(endPoint).map(res => this.extractData(res, false));
    }

    postAPI(apiEndpoint: string, values: any, photos?): Observable<any> {
        if (photos == null) {
            return this.httpService
                .post(apiEndpoint, values)
                .map(res => this.extractData(res, true));
        } else {
            let filesObj = [
                {"reqKey": "image", "files": photos},
            ];
            return this.httpService
                .postWithFile(apiEndpoint, values, filesObj)
                .map(res => this.extractData(res, true));
        }
    }

    updateAPI(apiEndpoint: string, id: number, values: any): Observable<any> {
        return this.httpService
            .put(apiEndpoint + "/" + id, values)
            .map(res => this.extractData(res, true));

    }

    private extractData(res: Response, show: boolean) {
        let data = res.json();
        let msg = data.payload.message;
        if (show && msg) {
            this.toastManager.clearAllToasts()
            this.toastManager.success(msg);
        }
        return data || {};
    }
}
