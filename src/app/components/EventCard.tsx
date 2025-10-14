import { SadhanaEvent } from '@/app/lib/mockData';

interface EventCardProps {
  event: SadhanaEvent;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{event.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{event.date} · {event.duration}</p>
        <p className="mb-4">{event.description}</p>
        <div className="font-bold">{event.price === 0 ? 'Free' : `$${event.price}`}</div>
      </div>
    </div>
  );
}
