import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  hidden:any={
    'hidden':true
  };
  toggle() {
    this.hidden['hidden']= !this.hidden['hidden'];
    
  }
  constructor(
  ) { }
  ngOnInit() {
  }
  
}
