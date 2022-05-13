import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
      {
      id: 1,
      title: 'Motorcycle',
      description: 'My dream bike',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_960_720.jpg',
      createdDate: new Date(),
      snaps : 0,
      location: 'Bruxelles'
    },

    {
      id: 2,
      title: 'Lizard',
      description: 'What is this animal',
      imageUrl: 'https://cdn.pixabay.com/photo/2020/07/04/20/12/green-lizard-5370821_960_720.jpg',
      createdDate: new Date(),
      snaps : 0

    },

    {
      id: 3,
      title: 'Beach',
      description: 'Next holidays ?',
      imageUrl: 'https://cdn.pixabay.com/photo/2018/10/19/09/17/travel-3758193_960_720.jpg',
      createdDate: new Date(),
      snaps : 0,
      location: 'Miami'
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap{
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) throw new Error('FaceSnap not found!');
    else return faceSnap;
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

}