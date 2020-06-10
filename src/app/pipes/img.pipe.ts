import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const url = environment.imgPath;

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): string {

    if (!img){
      return './assets/original.jpg';
    }
    const imgUrl = `${url}/${size}${img}`;
    return imgUrl;
  }

}
