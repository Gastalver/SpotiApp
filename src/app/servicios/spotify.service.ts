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
  public artista:string='';
  private token:string='BQA98K5J1C1NlLbcdHDcXQ_Q0cAZLz6OnKeVRzwUGYkMGnu6JqktIlcgbaF3cbh1hXn3wRH4EI8IGuQKZH8';

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
    return  this.http.get(url, { headers }).map((resultados:any) => {
      this.artistas = resultados.artists.items;
      return this.artistas;
    });
  };

  getArtista(id:string){
    let url = `${this.urlSpotify}artist/${id}`;
    let headers = this.getHeaders();
    return  this.http.get(url, { headers }).map((artista:any) => {
      this.artista = artista;
      return this.artista;
    });
  };
}
