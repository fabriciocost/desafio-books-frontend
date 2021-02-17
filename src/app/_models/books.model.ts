export interface BooksModel {
  data: Array<BookModel>;
  page: number;
  totalItems: number;
  totalPages: number;
}

export interface BookModel {
  authors: Array<string>;
  title: string;
  description: string;
  pageCount: number;
  category: string;
  imageUrl: string;
  language: string;
  isbn10: string;
  isbn13: string;
  publisher: string;
  published: number;
  id: string;
}
