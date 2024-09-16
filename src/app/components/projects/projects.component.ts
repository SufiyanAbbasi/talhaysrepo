import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  name: string;
  imageUrl: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      name: 'Long videos',
      imageUrl: 'assets/images/long3.jpeg',
      link: 'https://drive.google.com/drive/folders/1qoxrsUEYgvLwan_IEjOlWPWvowTMWP-7'
    },
    {
      name: 'Short Videos',
      imageUrl: '/assets/images/short6.jpeg',
      link: 'https://drive.google.com/drive/folders/1GxdlRuZWCgBd3NYcR9yNyIcP0BRnu-qf'
    },
    {
      name: 'Anime Videos',
      imageUrl: '/assets/images/ani.jpeg',
      link: 'https://drive.google.com/drive/folders/1IOUroACoxoehlWUUOwJ12YOrQ9lTBQjM'
    },
  ];


}
