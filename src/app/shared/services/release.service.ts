import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Release } from '../../shared/models/release';

@Injectable()
export class ReleaseService {

  private dbPath = '/releases';
  releaseRef: AngularFireList<Release> = null;

  constructor(private db: AngularFireDatabase) {
    this.releaseRef = db.list(this.dbPath);
  }

  createRelease(release: Release) {
    this.releaseRef.push(release);
  }

  getReleasesList(): AngularFireList<Release> {
    return this.releaseRef;
  }

  deleteRelease(key: string) {
    this.releaseRef.remove(key).catch(error => this.handleError(error));
  }

  updateRelease(key: string, value: any) {
    this.releaseRef.update(key, value).catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
