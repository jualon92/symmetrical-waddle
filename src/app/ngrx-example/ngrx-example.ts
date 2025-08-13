import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
 
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../ngrx/contador/contador.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-ngrx-example',
  imports: [AsyncPipe],
  templateUrl: './ngrx-example.html',
  styleUrl: './ngrx-example.scss'
})
export class NgrxExample {
  count$: Observable<number>;
 

   constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }


  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
