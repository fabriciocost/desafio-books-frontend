import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookModel } from 'src/app/_models/books.model';
import { BooksService } from 'src/app/_services/books/books.service';
import { BookDialogComponent } from '../book-dialog/book-dialog.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Array<BookModel> | undefined;
  currentPage = 1;
  totalItems = 0;
  totalPages = 0;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    this.booksService.getAll(this.currentPage).subscribe((res) => {
      this.books = res.data;
      this.currentPage = res.page;
      this.totalItems = res.totalItems;
      this.totalPages = Math.ceil(res.totalPages);
    });
  }

  navigateBook(book: BookModel) {
    this.dialog.open(BookDialogComponent, {
      data: book,
    });
  }

  onNextPage() {
    if (this.currentPage != this.totalPages) {
      this.currentPage++;
      this.booksService.getAll(this.currentPage).subscribe((res) => {
        this.books = res.data;
        this.currentPage = res.page;
        this.totalItems = res.totalItems;
        this.totalPages = Math.ceil(res.totalPages);
      });
    }
  }

  onPreviousPage() {
    if (this.currentPage != 1) {
      this.currentPage--;
      this.booksService.getAll(this.currentPage).subscribe((res) => {
        this.books = res.data;
        this.currentPage = res.page;
        this.totalItems = res.totalItems;
        this.totalPages = Math.ceil(res.totalPages);
      });
    }
  }
}
