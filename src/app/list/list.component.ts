import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from '../interface/data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  table: Data | any;
  teamsName: any;
  private activatedRoute: ActivatedRoute;

  constructor(activatedRoute: ActivatedRoute) {
    this.activatedRoute = activatedRoute;
    this.table = this.table;
  }

  showList() {
    this.activatedRoute.data.subscribe((data) => {
      this.table = data.res.data;
      return this.table;
    });
  }

  ngOnInit() {
    this.showList();
  }
}
