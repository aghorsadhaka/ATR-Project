import { mockSadhanaEvents } from '@/app/lib/mockData';
import EventCard from '@/app/components/EventCard';

export default function SadhanaPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Upcoming Sadhana Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockSadhanaEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
