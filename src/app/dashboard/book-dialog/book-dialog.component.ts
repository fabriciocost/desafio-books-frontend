import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookModel } from 'src/app/_models/books.model';

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.css'],
})
export class BookDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public book: BookModel) {}

  ngOnInit(): void {}
}
