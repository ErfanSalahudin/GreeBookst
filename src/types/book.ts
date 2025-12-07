export interface Book {
  id: number;
  title: string;
  author: string;
  coverUrl: string;
}

export interface BookCategory {
  category: string;
  books: Book[];
}
