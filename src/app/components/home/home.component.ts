import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.animateText();
  }

  animateText(): void {
    setTimeout(() => {
      const word1 = document.getElementById('word1') as HTMLElement;
      if (word1) {
        word1.style.visibility = 'visible';
      }
    }, 1000);
    setTimeout(() => {
      const word2 = document.getElementById('word2') as HTMLElement;
      if (word2) {
        word2.style.visibility = 'visible';
      }
    }, 2000);
    setTimeout(() => {
      const word3 = document.getElementById('word3') as HTMLElement;
      if (word3) {
        word3.style.visibility = 'visible';
      }
    }, 3000);
    // Repeat the animation after 4 seconds (adjust as needed)
    setTimeout(() => this.animateText(), 4000);
  }
}
