import { mockBooks } from '@/app/lib/mockData';
import BookCard from '@/app/components/BookCard';

export default function BooksPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Books Catalog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
