import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  skills = [
    { name: 'Video Editing', img: 'assets/images/videditor.png' },
    { name: 'Animation', img: 'assets/images/ani.jpeg' },
    { name: 'Youtube Videos', img: 'assets/images/youtube.jpeg' },
    { name: 'Cashcow videos', img: 'assets/images/cash.jpeg' },
    { name: 'Visual Storytelling', img: 'assets/images/vis.png' },
    { name: 'Youtube Add', img: 'assets/images/youtubeadd.png' },
    { name: ' Social media video', img: 'assets/images/social.jpeg' },
  ];
}
