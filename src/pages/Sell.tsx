
import Navbar from "@/components/Navbar";
import SellForm from "@/components/SellForm";

const Sell = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto pt-32 px-4 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sell Your Crops
          </h1>
          <p className="text-lg text-gray-600">
            List your crops for sale and connect directly with buyers in your
            community.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <SellForm />
        </div>
      </div>
    </div>
  );
};

export default Sell;
