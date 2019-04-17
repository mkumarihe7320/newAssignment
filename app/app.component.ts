import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-dream-app';
  public show1: boolean = false;
  public show2: boolean = false;
  public show3: boolean = false;
  public buttonName: any = 'Show';



  toggle(par) {
    if (par == 1) {
      this.show1 = !this.show1;
      this.show2 = false;
      this.show3 = false;
    } else if (par == 2) {

      this.show2 = !this.show2;
      this.show1 = false;
      this.show3 = false;
    } else if (par == 3) {

      this.show3 = !this.show3;
      this.show2 = false;
      this.show1 = false;
    }
  }
}

