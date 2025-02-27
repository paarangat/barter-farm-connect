
import Navbar from "@/components/Navbar";
import DonationForm from "@/components/DonationForm";

const Donations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto pt-32 px-4 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Support Farmers
          </h1>
          <p className="text-lg text-gray-600">
            Your contribution helps farmers in need with education, debt relief, and
            essential resources.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <DonationForm />
        </div>
      </div>
    </div>
  );
};

export default Donations;
