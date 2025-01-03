import { Component, OnInit } from '@angular/core';
import { ColorsService } from './colors.services';

@Component({
  selector: 'app-colors',
  imports: [],
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css'] // corrected property name
})

export class ColorsComponent implements OnInit{
  pictures: any[] = [];

  constructor(private colorsService: ColorsService) {}

  async ngOnInit() {
    this.colorsService.getPictures().then(data => {
      for (let i = 0; i < data.length; i++) {
        this.pictures.push({
          id: data[i].id,
          artistName: data[i].artist_display,
          title: data[i].title,
          imageURI: `https://www.artic.edu/iiif/2/${data[i].image_id}/full/843,/0/default.jpg`,
        }); 
      }
      console.log(this.pictures);
      this.pictures.sort((a, b) => a.artistName.localeCompare(b.artistName));
    });
  }
}
