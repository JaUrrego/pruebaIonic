import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface Datos {
  userId:  number;
  id: number;
  title: string;
  completed: boolean;
}
type ApiResponse = {resultado: Datos[] }

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
httpClient = inject(HttpClient);
  constructor() { }
  
 getAll(): Promise <ApiResponse> {
   return firstValueFrom(
    this.httpClient.get  <ApiResponse>('https://jsonplaceholder.typicode.com/todos/1')
   )
  }
  
}
