import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
item  = localStorage.getItem('user')
show !: boolean;
  constructor() { }

  ngOnInit(): void {

  if(this.item === 'admin'){
    this.show = true;
    alert(`welcome ${this.item}`)
  }
  else {
    this.show = false;
    alert('denied')
  }
  }
}
