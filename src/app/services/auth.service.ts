import { Injectable } from '@angular/core';
import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';

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
                )
               }


  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.angularFireAuth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      })
    })
  }
}
