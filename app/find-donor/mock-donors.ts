export interface Donor {
  id: string;
  name: string;
  bloodType: string;
  location: string;
  city: string;
  distance: string;
  phone: string;
  email: string;
  lastDonation: string;
  totalDonations: number;
  available: boolean;
  image: string;
  rating: number;
}

export const mockDonors: Donor[] = [
  {
    id: "1",
    name: "John Smith",
    bloodType: "O+",
    location: "New York, NY",
    city: "New York",
    distance: "2.5 km",
    phone: "+1 (555) 123-4567",
    email: "john.smith@example.com",
    lastDonation: "2 months ago",
    totalDonations: 15,
    available: true,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    bloodType: "A+",
    location: "Brooklyn, NY",
    city: "New York",
    distance: "5.1 km",
    phone: "+1 (555) 234-5678",
    email: "sarah.j@example.com",
    lastDonation: "1 month ago",
    totalDonations: 8,
    available: true,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 4.9,
  },
  {
    id: "3",
    name: "Michael Chen",
    bloodType: "B+",
    location: "Manhattan, NY",
    city: "New York",
    distance: "3.2 km",
    phone: "+1 (555) 345-6789",
    email: "michael.chen@example.com",
    lastDonation: "3 weeks ago",
    totalDonations: 22,
    available: true,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5.0,
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    bloodType: "AB+",
    location: "Queens, NY",
    city: "New York",
    distance: "7.8 km",
    phone: "+1 (555) 456-7890",
    email: "emily.r@example.com",
    lastDonation: "1 week ago",
    totalDonations: 12,
    available: false,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 4.7,
  },
  {
    id: "5",
    name: "David Wilson",
    bloodType: "O-",
    location: "Bronx, NY",
    city: "New York",
    distance: "4.5 km",
    phone: "+1 (555) 567-8901",
    email: "david.w@example.com",
    lastDonation: "4 months ago",
    totalDonations: 30,
    available: true,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 5.0,
  },
  {
    id: "6",
    name: "Lisa Anderson",
    bloodType: "A-",
    location: "Staten Island, NY",
    city: "New York",
    distance: "12.3 km",
    phone: "+1 (555) 678-9012",
    email: "lisa.a@example.com",
    lastDonation: "6 weeks ago",
    totalDonations: 18,
    available: true,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    rating: 4.6,
  },
];

