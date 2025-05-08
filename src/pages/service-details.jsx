import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { services } from "../data/services";
import ServicesSidebar from "@/components/servicesSidebar";

export default function ServiceDetails() {
  const router = useRouter();
  const { slug } = router.query;
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const defaultSlug = slug || services[0].slug;
    const selected = services.find((s) => s.slug === defaultSlug);
    setActiveService(selected);
  }, [slug]);

  const handleSelect = (newSlug) => {
    const newService = services.find((s) => s.slug === newSlug);
    setActiveService(newService);
  };

  if (!activeService) return <p>Loading...</p>;

  return (
    <div className="flex flex-col md:flex-row p-8 gap-8">
      <div className="w-full md:w-1/4">
        <ServicesSidebar
          activeSlug={activeService.slug}
          onSelect={handleSelect}
        />
      </div>
      <div className="w-full md:w-3/4">
        <img
          src={activeService.image}
          alt={activeService.title}
          className="w-full mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{activeService.title}</h1>
        <p className="text-gray-700">{activeService.content}</p>
      </div>
    </div>
  );
}
