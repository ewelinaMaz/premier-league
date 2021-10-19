import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { List } from '../interface/list';
import { ListService } from './list.service';

@Injectable({
  providedIn: 'root',
})
export class ListResolver implements Resolve<List> {
  listService: ListService;

  constructor(listService: ListService, private router: Router) {
    this.listService = listService;
  }

  resolve(route: ActivatedRouteSnapshot): Observable<List> {
    return this.listService.getList();
  }
}
