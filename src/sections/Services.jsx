import { services } from "../constants"
import ServicesCard from "../components/ServicesCard"
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <ServicesCard key={service.label} {...service} />
        ))}
    </section>
  );
};

export default Services
