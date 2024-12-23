import React from "react";

const CarSearchSection = () => {
  return (
    <div className="bg-black h-screen text-white py-16">
      <div className="container mx-auto px-6 py-5">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-12  mt-5 text-center">
          Find Your Dream Car
          <hr className="h-2 bg-slate-400  rounded-md mt-2"/>
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
            <img
              src="https://cars.usnews.com/pics/size/640x420/static/images/Auto/izmo/i159614767/2021_toyota_corolla_angularfront.jpg"
              alt="Car 1"
              className="w-1/3 rounded-lg"
            />
            <div className="ml-6 text-black">
              <h3 className="text-2xl font-bold mb-4">Luxury Cars</h3>
              <p className="text-gray-700">
                Experience the comfort and elegance of our premium car range.
              </p>
            </div>
            
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
            <img
              src="https://media.ed.edmunds-media.com/kia/seltos/2021/oem/2021_kia_seltos_4dr-suv_ex_fq_oem_1_815.jpg"
              alt="Car 2"
              className="w-1/3 rounded-lg"
            />
            <div className="ml-6 text-black">
              <h3 className="text-2xl font-bold mb-4">Family Cars</h3>
              <p className="text-gray-700">
                Spacious and reliable cars perfect for your family trips.
              </p>
            </div>
          </div>
        </div>

        
      
      </div>
    </div>
  );
};

export default CarSearchSection;
