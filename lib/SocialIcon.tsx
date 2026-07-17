import {
  Send,
  Github,
  Instagram,
  MessageCircle,
  Mail,
  Globe,
  LucideIcon
} from "lucide-react";
import { SocialLink } from "@/lib/placeholders";

const iconMap: Record<SocialLink["icon"], LucideIcon> = {
  telegram: Send,
  github: Github,
  instagram: Instagram,
  discord: MessageCircle,
  email: Mail,
  website: Globe
};

export default function SocialIcon({
  icon,
  className
}: {
  icon: SocialLink["icon"];
  className?: string;
}) {
  const Icon = iconMap[icon];
  return <Icon className={className} />;
}
