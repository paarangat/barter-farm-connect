
import Navbar from "@/components/Navbar";
import BarterForm from "@/components/BarterForm";

const Barter = () => {
  // Sample equipment data
  const equipmentList = [
    { id: 1, name: "Tractor", condition: "Good", owner: "Ramesh Singh" },
    { id: 2, name: "Harvester", condition: "Excellent", owner: "Suresh Kumar" },
    { id: 3, name: "Water Pump", condition: "Fair", owner: "Mahesh Patel" },
    { id: 4, name: "Thresher", condition: "Good", owner: "Dinesh Sharma" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto pt-32 px-4 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Equipment Barter
          </h1>
          <p className="text-lg text-gray-600">
            List your farming equipment for exchange with other farmers. Help build
            a collaborative farming community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">List Your Equipment</h2>
            <BarterForm />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Available Equipment</h2>
            <div className="space-y-4">
              {equipmentList.map((equipment) => (
                <div key={equipment.id} className="border p-4 rounded-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg">{equipment.name}</h3>
                      <p className="text-sm text-gray-600">Condition: {equipment.condition}</p>
                      <p className="text-sm text-gray-600">Owner: {equipment.owner}</p>
                    </div>
                    <button 
                      className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition-colors"
                      onClick={() => {
                        console.log(`Bartering for ${equipment.name}`);
                      }}
                    >
                      Barter
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barter;
