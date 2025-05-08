import { useRouter } from "next/router";
import { services } from "../../data/services";

export default function Services() {
  const router = useRouter();

  const goToDetails = (slug) => {
    router.push({
      pathname: "/service-details",
      query: { slug },
    });
  };

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {services.map((service) => (
        <div
          key={service.slug}
          onClick={() => goToDetails(service.slug)}
          className="cursor-pointer border p-4 hover:shadow-md transition"
        >
          <img
            src={service.image}
            alt={service.title}
            className="mb-3 w-full h-40 object-cover"
          />
          <h2 className="text-xl font-semibold">{service.title}</h2>
        </div>
      ))}
    </div>
  );
}
