import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {CommonFunctions} from "../common-functions";
import {Route} from "../constants/routes";
import {Router} from "@angular/router";
import {SharedUser} from "../shared-model/shared-user.model";

@Injectable()
export class SharedService extends SharedUser {

  constructor(private router: Router) {
    super();
  }

  /* Shared LoggedIn Param */

  private isLoginRequired: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  getLoginRequired(): Observable<boolean> {
    return this.isLoginRequired.asObservable();
  }

  setLoginRequired(val: boolean): void {
    this.isLoginRequired.next(val);
  }

  /* Shared LoggedIn Param */

  /* Shared Loader Param */

  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private taskCount: number = 0;

  getLoader(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  setLoader(val: boolean): void {
    if (val) {
      this.taskCount += 1
    } else {
      this.taskCount -= 1
      this.taskCount != 0 ? val = true : "";
    }
    this.isLoading.next(val);
  }

  /* Shared Loader Param */

  /* Shared User Token Param */

  private _token: string;

  getToken(): string {
    if (CommonFunctions.isValidString(this._token)) {
      return this._token;
    } else {
      return this.getTokenFromStorage();
    }
  }

  setToken(value: string) {
    this._token = value;
  }

  private setTokenInStorage(value) {
    // localStorage.setItem(Storage.TOKEN, CommonFunctions.ENCRYPT_OBJ(value));
  }

  private getTokenFromStorage(): any {
    // let token = CommonFunctions.DECRYPT_OBJ(localStorage.getItem(Storage.TOKEN));
    // localStorage.removeItem(Storage.TOKEN);
    // this.setToken(token);
    return '';
  }

  /* Shared User Token Param */

  isLoggedin(): boolean {
    return CommonFunctions.isValidString(this.getToken()) ? true : false;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/" + Route.LOGIN]);
  }

} 
