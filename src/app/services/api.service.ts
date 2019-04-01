import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {ApiConfig} from './api-config';
import {Movie} from '../movie';

@Injectable()
export class ApiService {
  /**
   * @param http
   */
  constructor (private http: Http) { }

  /**
   * @param path
   * @Description API GET method
   * @returns {Promise<any>}
   */
  get(path: string) {
    return this.http
      .get([ApiConfig.baseUrl, path].join('/'))
      .map((res) => res.json().Search || []);
  }

  /**
   *
   * @param id
   * @returns {Promise<Movie>}
   */
  getID(id: string): Promise<any> {
    return this.http
      .get([ApiConfig.baseUrl, id].join('/'))
      .map((res) => res.json())
      .toPromise();
  }
}
