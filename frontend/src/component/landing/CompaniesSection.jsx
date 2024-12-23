import React from "react";

const CompaniesSection = () => {
  const companies = [
    { id: 1, name: "Kia", logo: "https://static.vecteezy.com/system/resources/previews/020/500/396/non_2x/kia-logo-brand-symbol-black-design-south-korean-car-automobile-illustration-free-vector.jpg", quantity: 120 },
    { id: 2, name: "Toyota", logo: "https://fabrikbrands.com/wp-content/uploads/Toyota-Logo-1.png", quantity: 85 },
    { id: 3, name: "Suzuki", logo: "https://fabrikbrands.com/wp-content/uploads/Suzuki-Logo-1a.png", quantity: 150 },
    { id: 4, name: "Mitsubishi", logo: "https://fabrikbrands.com/wp-content/uploads/Mitsubishi-Logo-History-1-1155x770.png", quantity: 95 },
    { id: 5, name: "Honda", logo: "https://e7.pngegg.com/pngimages/255/245/png-clipart-honda-logo-honda-city-honda-motor-company-car-auto-body-repair-training-angle-emblem.png", quantity: 140 },
    { id: 6, name: "Ford", logo: "https://w7.pngwing.com/pngs/354/87/png-transparent-ford-logo-ford-motor-company-car-ford-ikon-ford-f-series-ford-logo-blue-label-text.png", quantity: 75 },
  ];

  return (
    <section className="py-16 bg-gray-200">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">What Would You Like to Find?</h2>
        <hr className="mt-4 h-1 w-1/4 mx-auto bg-gradient-to-r from-blue-800 via-black to-blue-800 border-0 rounded" />
      </div>

      {/* Companies Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14  px-6 ">
        {companies.map((company) => (
          <div
            key={company.id}
            className="bg-white rounded-lg flex items-center p-6 space-x-4 shadow-2xl shadow-black"
          >
            {/* Logo */}
            <img
              src={company.logo}
              alt=""
              className="w-16 h-16 object-contain"
            />

            {/* Details */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{company.name}</h3>
              <p className="text-gray-600">{company.quantity} Cars Available</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompaniesSection;
