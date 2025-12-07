// src/data/mockBooks.ts (Data buku)

import romance1 from '../image/romance 1.jpg'
import romance3 from '../image/romance3.jpg'
import romance4 from '../image/romance 4.jpg'

export interface Book {
  id: number
  title: string
  author: string
  coverUrl: string // Placeholder URL untuk gambar
}

export interface BookCategory {
  category: string
  books: Book[]
}

// Data Mockup, menggunakan placeholder untuk URL gambar
const MOCK_BOOKS_DATA: BookCategory[] = [
  {
    category: 'Romance',
    books: [
      {
        id: 1,
        title: 'Romance Rival',
        author: 'Yuan Lee',
        coverUrl: romance1
      },
      {
        id: 2,
        title: 'Melarungku Bersamamu',
        author: 'F. Anissa',
        coverUrl: romance3
      },
      {
        id: 3,
        title: 'Lovers at the Sea',
        author: 'Mimidaisy',
        coverUrl: romance4
      },
      {
        id: 4,
        title: 'Loneliness is My Friend',
        author: 'Afna Syahrin',
        coverUrl: romance1
      },
      {
        id: 5,
        title: 'Heartstrings',
        author: 'Elena Voss',
        coverUrl: romance3
      },
      {
        id: 6,
        title: 'Whispers of Love',
        author: 'Samantha Reed',
        coverUrl: romance4
      },
      {
        id: 7,
        title: 'Eternal Flame',
        author: 'Marcus Hale',
        coverUrl: romance1
      },
      {
        id: 8,
        title: 'Stolen Kisses',
        author: 'Isabella Lane',
        coverUrl: romance3
      },
      {
        id: 9,
        title: 'Moonlit Promises',
        author: 'Julian Park',
        coverUrl: romance4
      },
      {
        id: 10,
        title: 'Fateful Encounter',
        author: 'Nina Brooks',
        coverUrl: romance1
      }
    ]
  },
  {
    category: 'Action',
    books: [
      {
        id: 11,
        title: 'The Lost Expedition',
        author: 'T. E. Woods',
        coverUrl: 'cover-action1.jpg'
      },
      {
        id: 12,
        title: 'Blueprint for Survival',
        author: 'C. A. Fogel',
        coverUrl: 'cover-action2.jpg'
      },
      {
        id: 13,
        title: 'Adam Nation',
        author: 'E. J. Staffa',
        coverUrl: 'cover-action3.jpg'
      },
      {
        id: 14,
        title: 'Korean Novel',
        author: 'J. H. Lee',
        coverUrl: 'cover-action4.jpg'
      }
    ]
  },
  {
    category: 'Horror',
    books: [
      {
        id: 15,
        title: 'Asylum',
        author: 'Madeline Roux',
        coverUrl: 'cover-horror1.jpg'
      },
      {
        id: 16,
        title: "Hide and Don't Seek",
        author: 'Anica Mrose Rissi',
        coverUrl: 'cover-horror2.jpg'
      },
      {
        id: 17,
        title: 'The Last Chance Hotel',
        author: 'J. H. Jones',
        coverUrl: 'cover-horror3.jpg'
      },
      {
        id: 18,
        title: 'Nightbook',
        author: 'J. A. White',
        coverUrl: 'cover-horror4.jpg'
      }
    ]
  },
  {
    category: 'Education',
    books: [
      {
        id: 19,
        title: 'Book Title Ideas',
        author: 'Author Unknown',
        coverUrl: 'cover-education1.jpg'
      },
      {
        id: 20,
        title: 'How to Annotate to Your Professor',
        author: 'Dr. Emily Carter',
        coverUrl: 'cover-education2.jpg'
      },
      {
        id: 21,
        title: 'Critical Thinking',
        author: 'Erin Mantaa',
        coverUrl: 'cover-education3.jpg'
      },
      {
        id: 22,
        title: 'Critical Thinking',
        author: 'Morris Cullen',
        coverUrl: 'cover-education4.jpg'
      }
    ]
  }
]

export default MOCK_BOOKS_DATA
