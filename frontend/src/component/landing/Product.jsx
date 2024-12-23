import React from "react";

const ProductList = () => {
  const products = [
    { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_y9FBrFFXjbEGyLaEHf1dpFH78-J9yAFjlg&s", title: "Sedan" },
    { id: 2, image: "https://i.pinimg.com/736x/c8/b8/36/c8b8364fdbdcba8ff9e4117920f802f6.jpg", title: "SUV" },
    { id: 3, image: "https://i.pinimg.com/736x/3b/10/3f/3b103ffe2ba9954b249a04d08d71f40d.jpg", title: "Hatchback" },
    { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRadaOrBrC8ybEySvRNB3JqmODaqtjTV35hPw&s", title: "Convertible" },
    { id: 5, image: "https://www.shutterstock.com/image-photo/cargo-truck-driving-through-landscape-600nw-2340669945.jpg", title: "Truck" },
    { id: 6, image: "https://di-uploads-pod17.dealerinspire.com/porschewoodlandhills/uploads/2024/04/2024-Porsche-Cayenne-Coupe.png", title: "Coupe" },
    { id: 7, image: "https://t4.ftcdn.net/jpg/07/82/98/37/360_F_782983704_J7QrOHM4YYF73LO2TeoRwMk9TexMiNzD.jpg", title: "Minivan" },
    { id: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuENzGMMCsq9RyXiX0ppeAeDGCEoIeSnBBmg&s", title: "Wagon" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Used Cars By Body Type</h2>
        <hr className="mt-4 h-1 w-1/4 mx-auto bg-gradient-to-r from-blue-700  to-black
         border-0 rounded" />
      </div>

      {/* Product Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10  px-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group shadow-2xl shadow-black bg-white  rounded-lg overflow-hidden"
          >
            {/* Image */}
            <img
              src={product.image}
              className="w-full h-60 object-cover group-hover:blur-sm transition duration-300"
            />

            {/* Hover Text */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition duration-300">
              <p className="text-lg font-semibold">{product.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
