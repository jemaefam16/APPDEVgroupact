import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  ngOnInit() {
  }
onHomeClick(){ 
  this.router.navigate(['/home'])
}
onGiftsClick(){ 
  this.router.navigate(['/gifts'])
}
onCartClick(){ 
  this.router.navigate(['/cart'])
}
onLogoutClick(){ 
  this.router.navigate(['/login'])
}
}
