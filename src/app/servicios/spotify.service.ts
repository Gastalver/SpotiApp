import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"; // Servicio
import { HttpHeaders} from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(public http: HttpClient) {
    console.log('Servicio Spotify listo')
  }

  getArtistas(){
    let url = 'https://api.spotify.com/v1/search?query=metallica&type=album&offset=0&limit=20';
    let headers = new HttpHeaders(
      {
        'authorization': 'Bearer BQCdeG8K_WKqUVCRLtH79eoOXwWAITF87RpaCkKpzQJZWYXYqbMzteb_Q6NWQozprL6g5aFCoFdXF_7L-CI'
      });

      return this.http.get(url, { headers }).map(resultado =>{
            return 'Hola';
        })
      };
}
