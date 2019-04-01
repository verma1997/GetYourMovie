import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Movie} from '../movie';
import {ApiConfig} from './api-config';
import {ApiService} from './api.service';

@Injectable()
export class OMDBService {
  constructor(private api: ApiService) { }

  /**
   * @param name
   * @Description get movie by name
   * @returns {Promise<Movie>}
   */
  get(name) {
    return this.api.get(`?s=${name}${ApiConfig.apiKey}`);
  }

  /**
   * @param id
   * @Description get movie by its IMDB id
   * @returns {Promise<Movie>}
   */
  getById(id): Promise<Movie> {
    return this.api.getID(`?i=${id}${ApiConfig.apiKey}`);
  }

}
