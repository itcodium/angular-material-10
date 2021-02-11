import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BookService {

    constructor() { }
    close() {
        console.log('BookService -> close: ');
    }
    submit() {
        console.log('BookService -> submit: ');
    }
}
