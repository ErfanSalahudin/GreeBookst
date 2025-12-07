import { BookCategory } from '../types/book';

const romance1 = '/image/romance 1.jpg'
const romance3 = '/image/romance3.jpg'
const romance4 = '/image/romance 4.jpg'
const act1 = '/image/act1.jpg'
const act2 = '/image/act2.jpg'
const act3 = '/image/act3.jpg'
const act4 = '/image/act4.jpg'
const hr1 = '/image/hr1.jpg'
const hr2 = '/image/hr2.jpg'
const hr3 = '/image/hr3.jpg'
const hr4 = '/image/hr4.jpg'
const ed1 = '/image/ed1.jpg'
const ed2 = '/image/ed2.jpg'
const ed3 = '/image/ed3.jpg'
const ed4 = '/image/ed4.jpg'

const ROMANCE_COVER_1 = romance1;
const ROMANCE_COVER_3 = romance3;
const ROMANCE_COVER_4 = romance4;

const ACTION_COVER_1 = act1;
const ACTION_COVER_2 = act2;
const ACTION_COVER_3 = act3;
const ACTION_COVER_4 = act4;

const HORROR_COVER_1 = hr1;
const HORROR_COVER_2 = hr2;
const HORROR_COVER_3 = hr3;
const HORROR_COVER_4 = hr4;

const EDUCATION_COVER_1 = ed1;
const EDUCATION_COVER_2 = ed2;
const EDUCATION_COVER_3 = ed3;
const EDUCATION_COVER_4 = ed4;
export const MOCK_BOOKS_DATA: BookCategory[] = [
  {
    category: "Romance",
    books: [
      { id: 1, title: "Romance Rival", author: "Yuan Lee", coverUrl: ROMANCE_COVER_1 },
      { id: 2, title: "Melarungku Bersamamu", author: "F. Anissa", coverUrl: ROMANCE_COVER_3 },
      { id: 3, title: "Lovers at the Sea", author: "Mimidaisy", coverUrl: ROMANCE_COVER_4 },
      { id: 4, title: "Loneliness is My Friend", author: "Afna Syahrin", coverUrl: ROMANCE_COVER_1 },
      { id: 5, title: "Sweet Escape", author: "L. K. Purnomo", coverUrl: ROMANCE_COVER_3 },
      { id: 6, title: "Rainy Day Confessions", author: "J. H. Chen", coverUrl: ROMANCE_COVER_4 },
      { id: 7, title: "Under the Maple Tree", author: "R. A. Hidayat", coverUrl: ROMANCE_COVER_1 },
      { id: 8, title: "The Hidden Letter", author: "T. M. Alisha", coverUrl: ROMANCE_COVER_3 },
      { id: 9, title: "Eternal Dawn", author: "S. K. Sari", coverUrl: ROMANCE_COVER_4 },
      { id: 10, title: "Forever Yours", author: "A. Romance", coverUrl: ROMANCE_COVER_1 },
    ],
  },
  {
    category: "Action",
    books: [
      { id: 11, title: "The Lost Expedition", author: "T. E. Woods", coverUrl: ACTION_COVER_1 },
      { id: 12, title: "Blueprint for Survival", author: "C. A. Fogel", coverUrl: ACTION_COVER_2 },
      { id: 13, title: "Adam Nation", author: "E. J. Staffa", coverUrl: ACTION_COVER_3 },
      { id: 14, title: "Korean Novel", author: "J. H. Lee", coverUrl: ACTION_COVER_4 },
      { id: 15, title: "The End Game", author: "Z. Man", coverUrl: ACTION_COVER_1 },
      { id: 16, title: "High Stakes", author: "Action Hero", coverUrl: ACTION_COVER_2 },
      { id: 17, title: "Chase Down", author: "Speed Racer", coverUrl: ACTION_COVER_3 },
      { id: 18, title: "Final Battle", author: "Warrior King", coverUrl: ACTION_COVER_4 },
      { id: 19, title: "Escape Plan", author: "Sneaky Fox", coverUrl: ACTION_COVER_1 },
      { id: 20, title: "Victory Run", author: "Champ Runner", coverUrl: ACTION_COVER_2 },
    ],
  },
  {
    category: "Horror",
    books: [
      { id: 21, title: "Asylum", author: "Madeline Roux", coverUrl: HORROR_COVER_1 },
      { id: 22, title: "Hide and Don't Seek", author: "Anica Mrose Rissi", coverUrl: HORROR_COVER_2 },
      { id: 23, title: "The Last Chance Hotel", author: "J. H. Jones", coverUrl: HORROR_COVER_3 },
      { id: 24, title: "Nightbook", author: "J. A. White", coverUrl: HORROR_COVER_4 },
      { id: 25, title: "Dark Shadows", author: "Ghost Writer", coverUrl: HORROR_COVER_1 },
      { id: 26, title: "Creepy Crawlies", author: "Spider Man", coverUrl: HORROR_COVER_2 },
      { id: 27, title: "Haunted House", author: "Boo Berry", coverUrl: HORROR_COVER_3 },
      { id: 28, title: "Midnight Screams", author: "Night Owl", coverUrl: HORROR_COVER_4 },
      { id: 29, title: "The Doll", author: "Dead Eyes", coverUrl: HORROR_COVER_1 },
      { id: 30, title: "Blood Moon", author: "Vampire Bat", coverUrl: HORROR_COVER_2 },
    ],
  },
  {
    category: "Education",
    books: [
      { id: 31, title: "Book Title Ideas", author: "Author Unknown", coverUrl: EDUCATION_COVER_1 },
      { id: 32, title: "How to Annotate", author: "Dr. Emily Carter", coverUrl: EDUCATION_COVER_2 },
      { id: 33, title: "Critical Thinking", author: "Erin Mantaa", coverUrl: EDUCATION_COVER_3 },
      { id: 34, title: "Advanced Studies", author: "Morris Cullen", coverUrl: EDUCATION_COVER_4 },
      { id: 35, title: "Learning Paths", author: "Wise Owl", coverUrl: EDUCATION_COVER_1 },
      { id: 36, title: "Study Skills", author: "Brain Trainer", coverUrl: EDUCATION_COVER_2 },
      { id: 37, title: "Knowledge Quest", author: "Quest Master", coverUrl: EDUCATION_COVER_3 },
      { id: 38, title: "Academic Success", author: "Grade A", coverUrl: EDUCATION_COVER_4 },
      { id: 39, title: "Research Methods", author: "Data Miner", coverUrl: EDUCATION_COVER_1 },
      { id: 40, title: "Exam Prep", author: "Test Taker", coverUrl: EDUCATION_COVER_2 },
    ],
  },
];
