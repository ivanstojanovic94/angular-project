import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //styles: ['']
})
export class AppComponent {
  title = 'angular-project'
  name = 'Somalirano'
  imageUrl = 'https://www.espreso.co.rs/data/images/2018/06/01/07/378105_macka-bilder_ls.jpg'

  getName(){
    return this.name;
  }

  changeImage(e: KeyboardEvent){
    this.imageUrl = (e.target as HTMLInputElement).value
  }
}
