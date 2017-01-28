import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService, private apiService: ApiService) { }
  songToSearch: string;
  trainName: string;
  trainImgPath: string;
  trainTags: string;


  public songResults = [];
  public songToPlay = '';
  public displayAudioTag = false;
  public selectedTrack = {
    song: 'Select your song below',
    ph: ''
  };
  public trains = [];

  ngOnInit() {
  }


  logout() {
    this.homeService.logout().subscribe(res => {
      console.log('logged out');
    });
  }

  searchForSong = () => {
    this.apiService.getRelevantSongs(this.songToSearch).subscribe(res => {
      this.songToSearch = '';
      this.songResults = res.json();
    }, err => {
      console.log('err', err);
    });
  }

  firstSongInTrain = idx => {
    this.selectedTrack = this.songResults[idx];
    this.selectedTrack.ph = ':';
  }

  createTrain = () => {
    var opts = {
      selectedTrack: this.selectedTrack,
      name: this.trainName,
      imgurl: this.trainImgPath,
      tags: this.trainTags
    }
    console.log('opts', opts);
    this.apiService.userSubmitsTrain(opts);
  }

}
