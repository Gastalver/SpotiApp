import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"; // Servicio
import { HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  public urlSpotify:string='https://api.spotify.com/v1/';
  public artistas:string[]=[];
  public artista:any = {};
  public canciones:any = {};
  private token:string='BQBT3IaSmgUBBe1-gxEK4Exo8lJuBZwRY1s5jiEjbc7Js2Ul4CCtcgdUP0jodXcmnvA8zxoHr7YF0-JJ4lU';

  constructor(public http: HttpClient) {
    // console.log('Servicio Spotify listo')
  }

  private getHeaders(): HttpHeaders{
    let headers = new HttpHeaders(
      {
        'authorization': 'Bearer ' + this.token
      });
    return headers;
  }

  getArtistas(termino:string){
    let url = `${this.urlSpotify}search?query=${termino}&type=artist&offset=0&limit=20`;
    let headers = this.getHeaders();
    return  this.http.get(url, { headers })
      .map((resultados:any) => {
        this.artistas = resultados.artists.items;
        return this.artistas;
    });
  };

  getArtista(id:string){
    let url = `${this.urlSpotify}artists/${id}`;
    let headers = this.getHeaders();
    return  this.http.get(url, { headers })
      .map((artista:any) => {
        this.artista = artista;
        console.log(this.artista)
        return this.artista;
    });
  };

  getTopTracks(id:string){
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=ES`;
    let headers = this.getHeaders();
    return  this.http.get(url, { headers })
      .map((canciones:any) => {
        this.canciones = canciones.tracks;
        console.log(this.canciones);
        return this.canciones;
      });
  };
}
