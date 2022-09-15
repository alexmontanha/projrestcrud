import { Component } from '@angular/core';
import { Cliente } from './models/cliente';
import { ClienteService } from './services/cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto de CRUD com serviços Rest';

  constructor(private clienteService: ClienteService) {
  }

  getCliente(clienteID: string) {
    this.clienteService.getCliente(clienteID).subscribe(data => {
      console.log("Pega 1 cliente: " + data.Nome);
    });
  }

  getClientes() {
    this.clienteService.getClientes().subscribe(data => {
      const ids = Object.keys(data);
      const values = Object.values(data);
      const entries = Object.entries(data);

      ids.forEach(id => {
        console.log(id);
      });

      values.forEach(value => {
        console.log(value);
      });

      entries.forEach(entrie => {
        console.log(entrie);
      });


    });
  }


}
