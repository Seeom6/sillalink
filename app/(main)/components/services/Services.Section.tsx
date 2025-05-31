
import { motion } from "framer-motion";
import { Line1 ,Line2 } from "./LinesAnimation";
import { services } from "@/app/lib/StaticData";
import Title from "../Title";





export default function ServicesSection() {
  return (
    <motion.div id="services"
      className="container mx-auto  px-4 py-16 max-w-5xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className=" mb-12">
      <Title title1="Serv" title2="sice"/>
      </div>

      <div className="relative">
        {/* Service Cards */}
        <div className="space-y-8 md:space-y-12 lg:space-y-16 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`bg-indego-dark border border-primary rounded-xl p-6 shadow-sm relative ${
                index % 2 === 1 ? "md:ml-8 lg:ml-16" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: service.delay }}
            >
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <motion.div 
                  className="bg-[#6B2C91] rounded-full p-4 flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  {service.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl text-gray-400 font-medium mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connecting Lines - Only visible on medium screens and up */}
        <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
          {/* Line 1 - Top right to second card */}
          <motion.div 
            className="absolute top-[5%] right-[-13%] w-[200px] h-[150px] lg:w-[286px] lg:h-[213px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Line1 />
          </motion.div>

          {/* Line 2 - Second card to third card */}
          <motion.div 
            className="absolute top-[30%] left-[-12%] w-[150px] h-[170px] lg:w-[211px] lg:h-[239px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Line2 />
          </motion.div>

          {/* Line 1 (reused) - Third card to fourth card */}
          <motion.div 
            className="absolute top-[60%] right-[-13%] w-[200px] h-[150px] lg:w-[286px] lg:h-[213px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Line1 />
          </motion.div>
        </div>
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-12">
        <motion.button 
          className="bg-[#6B2C91] text-white px-6 py-3 rounded-full flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          See More
          <motion.svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.button>
      </div>
    </motion.div>
  );
}