import { Link } from "react-router";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  status: "active" | "coming-soon";
}

export function CourseCard({ id, title, description, status }: CourseCardProps) {
  const isActive = status === "active";

  return (
    <div className="group relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-lg">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <Badge 
            variant={isActive ? "default" : "secondary"}
            className={isActive ? "bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)]" : ""}
          >
            {isActive ? "Active" : "Coming Soon"}
          </Badge>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        
        {isActive ? (
          <Link
            to={`/course/${id}`}
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors group-hover:gap-3"
            style={{ color: 'var(--brand)' }}
          >
            View Course
            <ArrowRight size={16} className="transition-all" />
          </Link>
        ) : (
          <span className="text-sm text-gray-400">Available Soon</span>
        )}
      </div>
    </div>
  );
}
