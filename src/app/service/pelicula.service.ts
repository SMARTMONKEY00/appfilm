
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: "root"
})
export class PeliculaService {


  constructor(public http: HttpClient) {  
   console.log("HTTP");
  }


  getPeliculas():Observable<any>{
    return this.http.get('/api/listaPelicula');
  }

  postPersonaje(urlPersona : any ):Observable<any>{
    return this.http.post('/api/listaPersonaje',urlPersona);
  }
}
