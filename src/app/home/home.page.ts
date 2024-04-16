import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import {IonicModule} from '@ionic/angular'
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule, RouterLink ],
})
export class HomePage {
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      numeroDocumento: new FormControl('',[Validators.required, this.validarnumeroPosutivo]),
      email:new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[ Validators.required,  Validators.minLength(6)]) 
    });
  }
  validarnumeroPosutivo(control: FormControl):{[key: string]:any} | null {
    const valor = control.value;
    const aux = /^\d+$/;
    if (!aux.test(valor) || parseInt(valor, 10) <= 0) {
      return {'intPositivo': true}
    }
    return null; 
  }
  
}
