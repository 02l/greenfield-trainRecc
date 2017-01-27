import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  getRelevantSongs(songQuery) {
    return this._http.post('/api/hypemSongs', {songQuery: songQuery});
  }

  addSong(track) {
    return this._http.post('/api/getHypemSongPath', {track: track})
  }

  userSubmitsTrain(trainInfo) {
    console.log('trainInfo', trainInfo);
    this._http.post('/api/addtrain', trainInfo).subscribe(res => {
      console.log('res', res.json());
    }, err => {
      console.log('err', err);
    })
  }

  testSession() {
    this._http.get('/api/testsession').subscribe(res => {
      console.log('res', res);
    }, err => {
      console.log('err', err);
    });
  }
}
