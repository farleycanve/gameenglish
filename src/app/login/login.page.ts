import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username:string="";
  password:string="";
  res:string="";
  constructor( private router: Router,public auth: AngularFireAuth) { }

  ngOnInit() {
  }

  async Login(){
      const {username, password}=this
      //
      try {
        console.log(username+'@gamelearnenglish.com')
        const res =await this.auth.signInWithEmailAndPassword(username + '@gamelearnenglish.com',password)
        this.router.navigate(['home'])
      } catch (error) {
        if(error=== "auth/user-not-found")
        this.res="Không tìm thấy tài khoản"
      }
  }

}
