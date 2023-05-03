import {Component, OnInit,OnChanges,SimpleChanges,AfterViewInit, ViewEncapsulation} from '@angular/core';
import { PeliculaService } from '../service/pelicula.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  providers: [PeliculaService]  
})
export class PeliculaComponent  implements  OnInit, OnChanges,AfterViewInit {
    	
    public mostrarPanelForm: boolean = false;
    public listaPelis : any = [];
    public listaPersonajes : any = [];
    public pelicula : any=null;
	constructor( private peliculaService : PeliculaService) { 
	
	}
	
	ngAfterViewInit() {
    // viewChild is set after the view has been initialized
	}

    ngOnChanges(changes: SimpleChanges) { 
	
    }
	
	ngOnInit() {
        this.listarPelicula();
	}
	 
    /**
     * listarPelicula
     */
    public listarPelicula() {
        this.listaPelis =[];
        this.peliculaService.getPeliculas().subscribe(data => this.listaPelis = data);	
    }

	
    /**
     * verDetalle
     */
    public verDetalle(obj:any) {
        this.pelicula = obj;  
        this.listaPersonajes = [];
        this.peliculaService.postPersonaje( this.pelicula.characters).subscribe(data => this.listaPersonajes = data);
        this.mostrarPanelForm = true;
    }

    /**
     * cancelar
     */
    public cancelar() {
        this.mostrarPanelForm = false;
    }

}