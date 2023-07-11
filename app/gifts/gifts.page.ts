import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.page.html',
  styleUrls: ['./gifts.page.scss'],
})
export class GiftsPage implements OnInit {

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
