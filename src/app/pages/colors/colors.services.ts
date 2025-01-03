

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ColorsService {

  async getPictures() {
    const response = await fetch('https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=100&fields=id,title,image_id,artist_display');
    const data = await response.json();
    return data.data;
  }
}