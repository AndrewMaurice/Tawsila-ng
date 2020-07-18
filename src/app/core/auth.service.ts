import { Injectable } from '@angular/core';
import { auth } from 'firebase';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../shared/models/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(private angularFireAuth: AngularFireAuth,
              private afs: AngularFirestore) {
                this.user$ = this.angularFireAuth.authState
                .pipe(
                  switchMap(user => {
                    if (user) {
                      return this.afs.doc<User>(`Users/${user.uid}`).valueChanges();
                    } else {
                      return of(null);
                    }
                  })
                );
               }


  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.angularFireAuth
      .auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      });
    });
  }

  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new auth.FacebookAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.angularFireAuth
      .auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      });
    });
  }
}
