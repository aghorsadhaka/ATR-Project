import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'ATR Spiritual Learning',
  description: 'Community for sadhana, books, events, and more',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head> 
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-white shadow">
          <nav className="container mx-auto flex items-center justify-between p-4">
            <Link href="/" className="text-xl font-semibold">ATR</Link>
            <div className="space-x-4">
              <Link href="/sadhana" className="hover:text-indigo-600">Sadhana</Link>
              <Link href="/books" className="hover:text-indigo-600">Books</Link>
              <Link href="/store" className="hover:text-indigo-600">Store</Link>
              <Link href="/about" className="hover:text-indigo-600">About</Link>
            </div>
          </nav>
        </header>
        <main className="container mx-auto p-6">{children}</main>
        <footer className="bg-white border-t mt-12">
          <div className="container mx-auto p-4 text-center text-sm">
            © {new Date().getFullYear()} ATR Spiritual Learning
          </div>
        </footer>
      </body>
    </html>
);
}
