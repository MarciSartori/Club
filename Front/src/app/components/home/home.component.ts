import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { usuariointerface } from '../../models/usuario-interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() items: any[] = [];
  mensaje1: string;
  resultados: any[];
  constructor(private servicio: ServiceService) { }
  private nombres: usuariointerface;

  // this.mensaje1 = servicio.mensaje1();
  // console.log(servicio.mensaje1());
  ngOnInit() {
    this.getListaUsuarios();
  }

  getListaUsuarios() {
    this.servicio.obtenerTodos().subscribe((data: any) => {
      this.resultados = data;
      console.log(data);
    });
  }


}





