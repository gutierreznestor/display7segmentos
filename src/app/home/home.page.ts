import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  checkboxes: any;
  e1 = false;
  e2 = false;
  e3 = false;
  e4 = false;

  s1 = true;
  s2 = true;
  s3 = true;
  s4 = false;
  s5 = true;
  s6 = true;
  s7 = true;

  constructor() {
    this.checkboxes = [
      { id: 1, Nombre: 'e1', isChecked: false },
      { id: 2, Nombre: 'e2', isChecked: false },
      { id: 3, Nombre: 'e3', isChecked: false },
      { id: 4, Nombre: 'e4', isChecked: false },
    ];
    this.e1 = false;
    this.e2 = false;
    this.e3 = false;
    this.e4 = false;
    this.s1 = true;
    this.s2 = true;
    this.s3 = true;
    this.s4 = false;
    this.s5 = true;
    this.s6 = true;
    this.s7 = true;
  }


  actualizarDisplay() {
    this.e1 = this.checkboxes[0].isChecked;
    this.e2 = this.checkboxes[1].isChecked;
    this.e3 = this.checkboxes[2].isChecked;
    this.e4 = this.checkboxes[3].isChecked;
    this.s1 = this.e3 || (!this.e2 && !this.e4) || this.e1 || (this.e2 && this.e4);
    this.s2 = (!this.e3 && !this.e4) || (this.e1) || (this.e2 && !this.e3) || (this.e2 && !this.e4);
    this.s3 = (!this.e2 && !this.e3) || (!this.e1 && !this.e3 && !this.e4) || (!this.e1 && !this.e2) || (!this.e1 && this.e3 && this.e4);
    this.s4 = (this.e2 && !this.e3) || (!this.e2 && this.e3) || (this.e3 && !this.e4) || this.e1;
    this.s5 = (!this.e2 && !this.e4) || (this.e3 && !this.e4) || (this.e1 && this.e3) || (this.e1 && this.e2);
    this.s6 = (!this.e1 && this.e2) || (!this.e1 && this.e4) || (!this.e2 && !this.e3);
    this.s7 = (this.e2 && !this.e3 && this.e4) || (!this.e2 && this.e3) || (this.e3 && !this.e4) ||
      (!this.e2 && !this.e4) || (this.e1 && this.e2);
  }
}
