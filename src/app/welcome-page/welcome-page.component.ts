import { Component, OnInit } from '@angular/core';

interface news {
  title: string;
  image: string;
  description: string;
}

const NEWS: news[] = [
  {
    title: 'Next clashes',
    image: 'assets/images/clashes.jpg',
    description:
      'Check where and when your favorite team will play the next match',
  },
  {
    title: 'Transfers',
    image: 'assets/images/transfers.jpg',
    description:
      'check where and when your favorite team will play the next match',
  },
  {
    title: 'For fans',
    image: 'assets/images/fans.jpeg',
    description:
      'You can buy ticket on our page!',
  },
  {
    title: 'Interviews',
    image: 'assets/images/interview.jpg',
    description:
      'The latest interviews with players and coaches from Premier League',
  },
];
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomePageComponent implements OnInit {
  news = NEWS;
  constructor() {}

  ngOnInit(): void {}
}
