import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;

  }

  login(email, password): Observable<any> {
    return Observable.fromPromise(
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
    );
  }


  isAuthenticated(): Observable<any> {
    console.log(this.user.map(user => user && user.uid !== undefined))
    return this.user.map(user => user && user.uid !== undefined);
  }


  logout(){
    this.afAuth.auth.signOut();
  }



}
