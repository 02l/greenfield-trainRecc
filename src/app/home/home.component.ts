import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ApiService } from '../services/api.service';
import { SearchTagService } from '../services/search-tag.service';
import { ApplicationRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService, private apiService: ApiService, private searchTagService: SearchTagService,
              private applicationRef: ApplicationRef) { }
  songToSearch: string;
  trainName: string;
  trainImgPath: string;
  trainTags: string;
  tagSearch: string;
  message: "text";


  public songResults = [];
  public searchResults = [];
  public songToPlay = '';
  public displayAudioTag = false;
  public selectedTrack = {
    song: 'Select your song below',
    ph: ''
  };
  public trains = [];
  public testForGabe = true;

  ngOnInit() {
  }

  search () {
    // this.testForGabe = !this.testForGabe
    this.searchTagService.submitTagSearch(this.tagSearch)
    .subscribe(res => {
      console.log('found trains from tag', res.json());
      this.trains = res.json();
      this.searchResults = res.json();
    })
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

    this.apiService.userSubmitsTrain(opts).subscribe(res => {
      this.trains = res;
      this.applicationRef.tick()
    }, err => {
      console.log('err', err);
    });
  }

}
