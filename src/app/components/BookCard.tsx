import {Book} from '@/app/lib/mockData';
interface BookCardProps {
  book: Book;
}   

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img src={book.cover} alt={book.title} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="font-semibold text-lg">{book.title}</h3>
      <p className="text-sm italic text-gray-600">By {book.author}</p>
      <p className="mt-2">{book.description}</p>
      <div className="mt-4 font-bold">{book.isFree ? 'Free' : `$${book.price}`}</div>
    </div>
  );
}
