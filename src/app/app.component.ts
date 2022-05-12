import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
      title: 'Motorcycle',
      description: 'My dream bike',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_960_720.jpg',
      createdDate: new Date(),
      snaps : 0,
      location: 'Bruxelles'
    },

    {
      title: 'Lizard',
      description: 'What is this animal',
      imageUrl: 'https://cdn.pixabay.com/photo/2020/07/04/20/12/green-lizard-5370821_960_720.jpg',
      createdDate: new Date(),
      snaps : 0

    },

    {
      title: 'Beach',
      description: 'Next holidays ?',
      imageUrl: 'https://cdn.pixabay.com/photo/2018/10/19/09/17/travel-3758193_960_720.jpg',
      createdDate: new Date(),
      snaps : 0,
      location: 'Miami'
    }
  ];
  }
  
}
