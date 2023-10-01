const carMarket = require("./obj");
console.log(carMarket.sellers[0]);

// Function to search for a car agency by name or ID.
function findAgency(carMarket, nameOrId) {
  const agency = carMarket.sellers.find(
    (agency) => agency.agencyName === nameOrId || agency.agencyId === nameOrId
  );
  return agency;
}

console.log(findAgency(carMarket, "Best Deal"));
console.log(findAgency(carMarket, "Plyq5M5AZ"));

// Function to retrieve all agencies' names.
function getAllAgencyNames(carMarket) {
  const agencyNames = carMarket.sellers.map((agency) => agency.agencyName);
  return agencyNames;
}

console.log(getAllAgencyNames(carMarket));

// Function to add a new car (Maserati MC20) to an agency's inventory.
function addMaseratiMC20ToAgency(carMarket, agencyId) {
  const agency = findAgency(carMarket, agencyId);
  if (agency) {
    const newCar = {
      brand: "Maserati",
      models: [
        {
          name: "MC20",
          year: 2023,
          price: 200000,
          carNumber: "MASERATI123",
          ownerId: agencyId,
        },
      ],
    };
    agency.cars.push(newCar);
    return true; // Car added successfully.
  } else {
    return false; // Agency not found.
  }
}
console.log(addMaseratiMC20ToAgency(carMarket, "Plyq5M5AZ"));

// Function to remove a car from an agency's inventory.
function removeCarFromAgency(carMarket, agencyId, carNumber) {
  const agency = findAgency(carMarket, agencyId);
  if (agency) {
    const carIndex = agency.cars.findIndex(
      (car) => car.carNumber === carNumber
    );
    if (carIndex !== -1) {
      agency.cars.splice(carIndex, 1);
      return true; // Car removed successfully.
    } else {
      return false; // Car not found in the agency.
    }
  } else {
    return false; // Agency not found.
  }
}
console.log(removeCarFromAgency(carMarket, "Plyq5M5AZ", "AZJZ4"));
// Function to change the cash and credit of an agency.
function updateAgencyFinancials(carMarket, agencyId, cashChange, creditChange) {
  const agency = findAgency(carMarket, agencyId);
  if (agency) {
    agency.cash += cashChange;
    agency.credit += creditChange;
    return true; // Financials updated successfully.
  } else {
    return false; // Agency not found.
  }
}

console.log(updateAgencyFinancials(carMarket, "Plyq5M5AZ", 10000, -5000));
