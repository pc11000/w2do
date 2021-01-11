import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

import './tnx-weekly-todo-planner/weekly-todo-planner.js';
import './tnx-weekly-todo-planner/weekly-todo-planner-cbx.js';
import './tnx-weekly-todo-planner/weekly-todo-planner-input.js';
import './tnx-weekly-todo-planner/weekly-todo-planner-todo-item.js';

import { TodoService } from './../services/todo.service';
import { Item } from './item.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {
  toDoList: Item[] = [];
  toDoListToday: Item[] = [];
  loading = false;
  totalItems = 0;
  itemsPerPage = 10;
  currPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  private itemsSub: Subscription;
  private loadingSub: Subscription;
  Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  username = localStorage.getItem('username');

  displayedColumns: string[] = ['title', 'body', 'toDoDay', 'isDone', 'actions'];
  columnsToDisplay: string[] = this.displayedColumns.slice();

  constructor(private toDoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.toDoService.setLoading(true);
    this.toDoService.getLoadingListner().subscribe( isLoading => {
      // alert(isLoading);
      this.loading = isLoading;
    });

    this.toDoService.getToDoItems(this.itemsPerPage, this.currPage);

    this.itemsSub = this.toDoService.itemsUpdated
    .subscribe((itemsData: {items: Item[], itemsCount: number}) => {

      this.totalItems = itemsData.itemsCount;
      console.log(itemsData.items)
      this.toDoList = itemsData.items;

      const day = new Date().getDay();
      this.toDoListToday = itemsData.items.filter(item => item.toDoDay === this.Days[day]);

      this.toDoService.setLoading(false);

    }, error => {
      this.totalItems = 0;
      this.toDoService.setLoading(false);
    });
  }

  onPageChanged(pageData: PageEvent) {
    this.loading = true;
    this.itemsPerPage = pageData.pageSize;
    this.currPage = pageData.pageIndex + 1;
    this.toDoService.getToDoItems(this.itemsPerPage, this.currPage);
  }



  ngOnDestroy() {
    this.itemsSub.unsubscribe();
    if(this.loadingSub) {
      this.loadingSub.unsubscribe();
    }
  }


  onAddItem() {
    this.router.navigate(['/create']);
  }

  onItemEdit(itemId: string) {
    // alert(itemId);
    this.toDoService.deleteItem(itemId).subscribe(res => {
      this.router.navigate(['/']);
    });
  }

  changeValue(id, value) {
    this.toDoService.setIsDone(id, !value);
  }

  onItemDelete(itemId: string) {
    // alert(itemId);
    this.toDoService.deleteItem(itemId).subscribe(res => {
      this.loading = true;
      this.toDoService.getToDoItems(this.itemsPerPage, this.currPage);
    });
  }

}
