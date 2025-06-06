import SEO from "@/components/seo";
import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("../components/home/index"));

const Home = function ({ blogs }) {
  return (
    <>
      <SEO
        pageTitle="Odoo ERP Services | Implementation, Customization & Support | Pysquad"
        pageDescription="Discover expert Odoo ERP services from Pysquad — certified implementation, customization, migration, integration & support tailored for your business."
        keywords="Odoo ERP services, Odoo implementation company, Odoo customization experts, Odoo migration support, Odoo ERP development India"
        ogUrl="https://odoo.pysquad.com/"
        ogTitle="Odoo ERP Services | Implementation, Customization & Support | Pysquad"
      />
      <HomePage blogs={blogs} />
    </>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/blogs/?is_for_odoo=true`
    );
    const data = await res.json();
    console.log("Fetched blog data:", data);

    return {
      props: {
        blogs: data || [],
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Failed to fetch blogs:", error);

    return {
      props: {
        blogs: [],
      },
      revalidate: 60,
    };
  }
}

export default Home;
