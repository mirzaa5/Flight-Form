import { inject, Injectable } from '@angular/core';
import { Auth, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithPopup, 
  signOut, 
  User} from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  //Encapsulating BehavioSubject as an observable
  //We expose only the observable (currentUser$) so that external components can subscribe but cannot change the state directly
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable(); 
  
  // Track if auth has been initialized
  private initializedSubject = new BehaviorSubject<boolean>(false);
  initialized$ = this.initializedSubject.asObservable();

  constructor(private auth: Auth, private router:Router){
    //sync behaviorSubject with auth state
    onAuthStateChanged(this.auth, (user) => {
      this.currentUserSubject.next(user);
      this.initializedSubject.next(true);
    } )

  }

  //Login with Google
  async loginWithGoogle() : Promise<boolean>{
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(this.auth, provider);
      return true; // Success!

    } catch (error) {
      console.error('Login failed', error);
      return false; // Failed!
    }
  }

  //Logout
  async logout() : Promise<boolean>{
    try{
      await signOut(this.auth);
      return true; // Success!
    }catch (error){
      console.log('Logout Failed ', error)
      return false; // Failed !
    }
  }

}
