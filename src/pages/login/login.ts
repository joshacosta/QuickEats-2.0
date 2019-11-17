import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

import { ListPage } from "../list/list";
import { RegisterPage } from "../register/register"

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  validations_form: FormGroup;
  errorMessage: string = '';
  userCollection: any;
  userDetails = this.authService.userDetails;

  constructor(

    private navCtrl: NavController,
    private authService: AuthenticationProvider,
    private formBuilder: FormBuilder

  ) {
   }

  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }


  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };
 

  loginUser(value){
    this.authService.loginUser(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.navCtrl.setRoot(ListPage);
    }, err => {
      this.errorMessage = err.message;
    })
  }

  goToRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }

  

}
