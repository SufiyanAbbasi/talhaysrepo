import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ResumeComponent } from "./components/resume/resume.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, HomeComponent, ProjectsComponent, ResumeComponent, ContactComponent]
})
export class AppComponent {
  title = 'myportfolio';

  @ViewChild('home') home!: ElementRef;
  @ViewChild('projects') projects!: ElementRef;
  @ViewChild('resume') resume!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;

// scrollToElement(elementId: string) {
//   const element: ElementRef | undefined = this[elementId];
//   if (element && element.nativeElement) {
//     element.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
//   }
// }

scrollToElement(elementId: string) {
  let element: ElementRef | undefined;
  switch (elementId) {
    case 'home':
      element = this.home;
      break;
    case 'projects':
      element = this.projects;
      break;
    case 'resume':
      element = this.resume;
      break;
    case 'contact':
      element = this.contact;
      break;
    default:
      console.error(`Unknown element ID: ${elementId}`);
      return; // Exit early if the element ID is unknown
  }

  if (element && element.nativeElement) {
    element.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    console.error(`Element ${elementId} not found or does not have a native element.`);
  }
}

}
