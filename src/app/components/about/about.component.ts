import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private router:Router ){}
  gotoProducts(){
    // this.router.navigateByUrl('/products');
    this.router.navigate(['/products']);
  }
}
