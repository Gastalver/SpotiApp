import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { SearchComponent } from './componentes/search/search.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { SpotifyService } from "./servicios/spotify.service";
import { HttpClientModule} from "@angular/common/http";
import { FormsModule} from "@angular/forms";
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { ArtistComponent } from './componentes/artist/artist.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [NgbCarouselConfig,SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
