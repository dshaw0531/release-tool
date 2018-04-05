import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class ReleaseService {
  releases: AngularFireList<any[]>;

  constructor(public af: AngularFireDatabase) {
    this.releases = af.list<any[]>('/releases');
  }

  addRelease(release: any) {
    this.releases.push(release);
  }

  getReleases() {
    return this.releases;
  }

  deleteRelease(releaseKey: any) {
    this.releases.remove(releaseKey);
  }

  updateRelease(release: any) {
    this.releases.update(release.$key, release);
  }
}
