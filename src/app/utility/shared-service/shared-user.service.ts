import {Injectable} from "@angular/core";
import {SharedUser} from "../shared-model/shared-user.model";

@Injectable()

export class SharedUserService {
  private _user: SharedUser;

  constructor() {
  }

  getUser(): SharedUser {
    return this._user;
  }

  setUser(value: SharedUser) {
    this._user = value;
  }
}
