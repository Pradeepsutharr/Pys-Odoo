import SEO from "@/components/seo";
import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("../components/home/index"));

export default function Home() {
  return (
    <>
      <SEO
        pageTitle="Odoo ERP Services | Implementation, Customization & Support | Pysquad"
        pageDescription="Discover expert Odoo ERP services from Pysquad — certified implementation, customization, migration, integration & support tailored for your business."
        keywords="Odoo ERP services, Odoo implementation company, Odoo customization experts, Odoo migration support, Odoo ERP development India"
      />
      <HomePage />
    </>
  );
}
