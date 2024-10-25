interface EventResponse {
    events: Events;
}

interface EventDetailsResponse {
    event: Event;
}

interface Event {
    uuid: string;
    name: string;
    description: string;
    severity: string;
    lat: number;
    lng: number;
    createdAt: string;
    updatedAt: string;
}

type Events = Event[];