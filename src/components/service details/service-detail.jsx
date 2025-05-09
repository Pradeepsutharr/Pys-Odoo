import React from "react";

const ServiceDetails = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Odoo Implementation Made Easy
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          From Business Analysis To Go-Live — We've Got You Covered
        </p>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-2">
          <img
            src="/images/developer-desk.jpg"
            alt="Developer working"
            className="rounded-lg shadow-lg mb-8"
          />

          <h2 className="text-2xl font-semibold mb-4">Odoo Implementation</h2>
          <p className="text-gray-700 mb-6">
            Odoo is a flexible, all-in-one ERP platform that helps businesses
            streamline operations, reduce manual tasks, and gain real-time
            visibility into every department. Its modular design makes it easy
            to deploy only the features you need — from sales and CRM to
            accounting, inventory, HR, and beyond. At Pysquad, our certified
            Odoo consultants deliver end-to-end implementation services designed
            around your specific business processes and industry requirements.
            Whether you're a startup or an enterprise, we ensure a smooth
            rollout that aligns with your goals and sets the foundation for
            long-term growth.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Our Implementation Process:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Business Analysis</li>
            <li>Requirement Gathering</li>
            <li>Project Planning</li>
            <li>System Setup & Configuration</li>
            <li>Testing & Validation</li>
            <li>Training & Go-Live</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            Benefits With Our Service:
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-4">
              <h4 className="font-semibold text-purple-700 mb-2">
                Flexible Solutions
              </h4>
              <p className="text-sm text-gray-600">
                Completely grow multimedia based content before global
                scenarios.
              </p>
            </Card>
            <Card className="p-4">
              <h4 className="font-semibold text-purple-700 mb-2">
                24/7 Support
              </h4>
              <p className="text-sm text-gray-600">
                Completely grow multimedia based content before global
                scenarios.
              </p>
            </Card>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="p-4">
            <h4 className="font-semibold text-lg mb-4">All Services</h4>
            <ul className="space-y-2">
              {[
                "Odoo Implementation",
                "Odoo Customization",
                "Odoo Integration",
                "Odoo Migration",
                "Odoo Support & Maintenance",
                "Odoo Training",
              ].map((service, idx) => (
                <li
                  key={idx}
                  className={`px-3 py-2 rounded cursor-pointer ${
                    service === "Odoo Implementation"
                      ? "bg-purple-200 font-medium"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {service}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 text-center">
            <h4 className="font-semibold mb-2">CONTACT US NOW</h4>
            <p className="mb-4 font-bold text-lg">You Need Help?</p>
            <Button className="bg-purple-700 hover:bg-purple-800 text-white">
              Get a free consultation
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
