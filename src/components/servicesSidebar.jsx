import { services } from "../data/services";

export default function ServicesSidebar({ activeSlug, onSelect }) {
  return (
    <ul className="space-y-3">
      {services.map((service) => (
        <li key={service.slug}>
          <span
            onClick={() => onSelect(service.slug)}
            className={`block p-3 border rounded cursor-pointer ${
              service.slug === activeSlug ? "bg-blue-100 font-semibold" : ""
            }`}
          >
            {service.title}
          </span>
        </li>
      ))}
    </ul>
  );
}
