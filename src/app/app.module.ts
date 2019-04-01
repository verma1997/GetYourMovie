import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {OMDBService} from './services/omdb.service';
import {ApiService} from './services/api.service';
import { NotfoundComponent } from './notfound/notfound.component';
import {RouterModule} from '@angular/router';
import {RouterConfig} from './routes/routes.module';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NotfoundComponent,
    MoviedetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(RouterConfig),
  ],
  providers: [OMDBService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
