import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import ImageFeed from '../models/image-feed.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private imageSubject = new BehaviorSubject<ImageFeed>(null);
  _image = this.imageSubject.asObservable();

  private showImageSubject = new BehaviorSubject<boolean>(false);
  _showImage = this.showImageSubject.asObservable();

  constructor() { }
  
  updateImage(img: ImageFeed): void {
    this.imageSubject.next(img);
  }
  
  updateShowImage(showImage: boolean): void {
    this.showImageSubject.next(showImage);
  }

}
