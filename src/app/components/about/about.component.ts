import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface peopleType {
  name: string;
  id: string;
  email: string;
  experience: string;
  skills: string[];
  responsibilities: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  people: any = [
    {
      name: 'Anwaruddin Mohammad',
      id: 'n01553149',
      email: 'n01553149@humber.ca',
      experience: 'Worked at TCS for 3 years.',
      skills: ['Java', 'Spring', 'SQL'],
      responsibilities: [
        'Develop and maintain Java applications.',
        'Collaborate with team members on project tasks.',
        'Design and implement database solutions.',
        'Conduct code reviews for team members.',
      ],
    },
    {
      name: 'Sibi Saraswathi Mohan',
      id: 'n01539502',
      email: 'n01539502@humber.ca',
      experience: 'Worked at Lightcast for 1.5 years.',
      skills: ['JavaScript', 'React', 'Node.js'],
      responsibilities: [
        'Build and optimize web applications using React.',
        'Collaborate with UI/UX designers for front-end development.',
        'Implement server-side logic using Node.js.',
        'Troubleshoot and debug application issues.',
      ],
    },
    {
      name: 'Garima Wadhwa',
      id: 'n01552997',
      email: 'n01552997@humber.ca',
      experience: 'Worked at Infosys for 3 years.',
      skills: ['Java', 'Python', 'Django'],
      responsibilities: [
        'Develop and maintain scalable Java applications.',
        'Implement backend functionality using Python and Django.',
        'Collaborate with cross-functional teams on project requirements.',
        'Conduct technical training sessions for junior developers.',
      ],
    },
  ];

  constructor(private router: Router) {

  }
}
