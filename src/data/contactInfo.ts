import { Clock, Mail, MapPin } from "lucide-react";

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "hello@example.com",
    href: `mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "hello@example.com"}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Poonagary, Northern Province, Sri Lanka",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Mon - Fri, 9AM - 6PM (GMT+5:30)",
  },
];
