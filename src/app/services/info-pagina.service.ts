												  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.service';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {

      this.cargada = true;
      this.info = resp;

    });
  }


  private cargarEquipo() {

    // Leer el archivo JSON
    this.http.get('https://angular-html-159e4-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp2: any) => {

      this.equipo = resp2;
       console.log(resp2);
    });


    // this.equipo = resp
  }

}







