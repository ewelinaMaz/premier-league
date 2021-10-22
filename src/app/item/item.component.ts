import { Component, OnInit, PipeTransform } from '@angular/core';
import { Standing } from '../interface/standing';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [DecimalPipe],
})
export class ItemComponent implements OnInit {
  table$: Observable<Standing[]> | any;
  textSearch = new FormControl('');
  table!: Standing[];
  teamsList!: Standing[];
  private activatedRoute: ActivatedRoute;

  constructor(pipe: DecimalPipe, activatedRoute: ActivatedRoute) {
    this.activatedRoute = activatedRoute;

    const search = (text: string, _pipe: PipeTransform) =>
      this.table.filter((teamsList) => {
        const term = text.toLowerCase();
        return (
          teamsList.team.name.toLowerCase().includes(term) ||
          _pipe.transform(teamsList.stats[6].value).includes(term)
        );
      });

    this.table$ = this.textSearch.valueChanges.pipe(
      startWith(''),
      map((text) => search(text, pipe))
    );
  }

  showList() {
    this.activatedRoute.data.subscribe((data) => {
      this.table = data.res.data.standings;
      return this.table;
    });
  }

  ngOnInit(): void {
    this.showList();
  }
}
