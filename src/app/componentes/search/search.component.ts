import { Component, OnInit } from '@angular/core';
import { SpotifyService} from "../../servicios/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  public termino: string ='';

  constructor( public _spotify: SpotifyService) {

  };
  public buscarArtista(){

    if (this.termino.length ==0) {
      return;
    }

    this._spotify.getArtistas(this.termino)
      .subscribe();
  }

  ngOnInit() {
  }

}
