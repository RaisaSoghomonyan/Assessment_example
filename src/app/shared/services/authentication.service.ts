import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {USERS} from '../users';

@Injectable({ providedIn: 'root'})
  export class AuthenticationService {
  private Users: User[] = USERS;
  public isLogin = false;
  login(username, password): boolean{
    const findUser: User = this.Users.find((user) => user.username === username);
    if ( findUser?.password === password){
      this.isLogin = true;
      return true;
    }
    return false;
    }

}
