import {Component, OnInit} from '@angular/core';
import {OMDBService} from '../services/omdb.service';
import {Movie} from '../movie';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['card.component.scss']
})
export class CardComponent implements OnInit {
  movies: Observable<Array<Movie>>;
  search = new FormControl;
  error = '';

  constructor(private _omdbService: OMDBService) {}

  ngOnInit() {
    this.movies = this.search.valueChanges
      .debounceTime(1)
      .distinctUntilChanged()
      .switchMap(search => this._omdbService.get(search))
      .catch(error => this.error = error );
  }
}
