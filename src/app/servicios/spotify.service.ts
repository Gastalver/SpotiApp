import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"; // Servicio
import { HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  public artistas:string[]=[];
  constructor(public http: HttpClient) {
    // console.log('Servicio Spotify listo')
  }

  getArtistas(termino:string){
    let url = `https://api.spotify.com/v1/search?query=${termino}&type=artist&offset=0&limit=20`;
    let headers = new HttpHeaders(
      {
        'authorization': 'Bearer BQAfomHnVsgyrgTi4Z4QMYxnBR-pdNfMJ9vsKdA-08cZ9T9uvnZbK1sqwdqEr_dxDOCWSjO0Uph2vqdopSw'
      });
    return  this.http.get(url, { headers }).map((resultados:any) => {
      this.artistas = resultados.artists.items;
      return this.artistas;
    });
  };
}
