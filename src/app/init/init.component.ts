import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css'],
})
export class InitComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  
  public saludar() {
    console.log("HolAAa");
  }
}
