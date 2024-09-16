import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactItems = [
    { name: 'Talha Abbasi', iconUrl: 'assets/images/link.svg', link: 'https://www.linkedin.com/in/talhaimtiaz999/' },
    { name: '+92 348 9443688', iconUrl: 'assets/images/call.svg', link: '+92 348 9443688' },
    { name: 'talhaimtiaz115@gmail.com', iconUrl: 'assets/images/email.svg', link: 'talhaimtiaz115@gmail.com' },
  ];
}
