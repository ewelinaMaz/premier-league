import { Component, OnInit, Input, PipeTransform, Pipe } from '@angular/core';
import { Standing } from '../interface/standing';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [DecimalPipe],
})
export class ItemComponent implements OnInit {
  @Input()
  teams: Standing[] = [];
  teams$: Observable<Standing[]>;

  textSearch = new FormControl('');

  constructor(pipe: DecimalPipe) {

    const search = (text: string, _pipe: PipeTransform) => {
      return this.teams.filter((teamsList) => {
        const term = text.toLowerCase();
        return (
          teamsList.team.name.toLowerCase().includes(term) ||
          _pipe.transform(teamsList.stats[6].value).includes(term)
        );
      });
    };

    this.teams$ = this.textSearch.valueChanges.pipe(
      startWith(''),
      map((text) => search(text, pipe))
    );
  }

  ngOnInit(): void {
  }
}
