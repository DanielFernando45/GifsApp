import { Component } from '@angular/core';
import { GifsService } from '../../services/gif.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  constructor( private gifsServise: GifsService){ }

  get gifs(): Gif[] {
    return this.gifsServise.gitList;
  }

}
