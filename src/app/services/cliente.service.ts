import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getCliente(ClienteId: string): Observable<Cliente> {
    console.log(`${environment.apiUrlBase}${environment.appClientId}/clientes/${ClienteId}.json`);
    return this.http.get<Cliente>(`${environment.apiUrlBase}${environment.appClientId}/clientes/${ClienteId}.json`);
  }

  getClientes(): Observable<Cliente[]> {
    console.log(`${environment.apiUrlBase}${environment.appClientId}/clientes.json`);
    return this.http.get<Cliente[]>(`${environment.apiUrlBase}${environment.appClientId}/clientes.json`);
  }


}
