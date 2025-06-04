import React from "react";

const LocationSearchPanel = (props) => {
  // sample array for locations
  const locations = [
    "House 3C/152 NIT Faridabad, Haryana",
    "Modern Delhi Public School, Greater Faridabad, Haryana",
    "National Institute of Technology, Kurukshetra",
    "House No 3G/146 Malhotra House, Faridabad, Haryana",
    "Hauz Khaz, Near Delhi",
  ];
  return (
    <div>
      {/* this is just a sample data */}
      {locations.map((location, index) => (
        <div
          key={index}
          onClick={() => {
            props.setVehiclePanel(true);
            props.setPanelOpen(false);
          }}
          className="flex items-center justify-start gap-4 my-2 border-2 p-3 rounded-xl border-gray-50 active:border-black"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
