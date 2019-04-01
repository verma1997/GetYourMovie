import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Movie} from '../movie';
import {OMDBService} from '../services/omdb.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  movies: Movie[];

  constructor(private route: ActivatedRoute, private _omdbService: OMDBService) { }

  ngOnInit() {
    const temp = this.getId();
    this._omdbService.getById(temp).then((result) => {
      this.movies = [result];
    });
  }

  //
  /**
   * @Description Get IMDB id of a movie to retrieve movie details
   * @returns {number}
   */
  getId() {
    let id = 0;
    this.route.params.subscribe((params: Params) => { // subscribe to router event
      id = params['id'];
    });
    return id;
  }

}
