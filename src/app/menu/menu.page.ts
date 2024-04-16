import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {IonicModule} from '@ionic/angular';
import {Datos, SolicitudService} from '../solicitud.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MenuPage implements OnInit {
  datos: Datos[] =[];
  service = inject(SolicitudService);
  constructor() { }

  async ngOnInit() {
    const response = await this.service.getAll();
    this.datos = response.resultado;
  }

}
