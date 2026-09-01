import os
from Vehicle import Vehicle
from Exceptions.InvalidRentalRates import InvalidRentalRates
class RentalManagement:
    filename = "rentals.txt"
    vehiclesFilename= "vehicles.txt"
    vehicleNextID = 1001
    rentalNextID = 1
    def __init__(self):
        if not os.path.exists(self.filename):
            with open(self.filename, "w") as file:
                file.write("")
        else:
            with open(self.filename, "r") as file:
                lines = file.readlines()
                last_line = lines[-1] if lines else "File is empty"
                self.rentalNextID = self.rentalNextID + len(lines)
                print("rentalNextID ", self.rentalNextID)

        if not os.path.exists(self.vehiclesFilename):
            with open(self.vehiclesFilename, "w") as file:
                file.write("")
        else:
            with open(self.vehiclesFilename, "r") as file:
                lines = file.readlines()
                self.vehicleNextID = self.vehicleNextID +len(lines) 
                print("vehicleNextID", self.vehicleNextID)

    def saveVehicle(self, vehicle:Vehicle):        
        with open(self.vehiclesFilename, "a") as file:
            file.write(f"{vehicle.id},{vehicle.name},{vehicle.type},{vehicle.rate},{vehicle.available}\n")

    def addVehicle(self):        
        name = input("Enter Vehicle Name : ")
        type = input("Enter Vehicle type : ")
        rate = input("Rate for rental : ")
        status = input("Enter availability of Vehicle (1: Available, 0: Not Available) : )")
        if status != "0":
            status = "1"
        try:
            if name.strip() == "" or type.strip() == "":
                raise ValueError("Vehicle Name should not be empty")
            else:
                rateVal = float(rate) 
                newVehicle = Vehicle(self.vehicleNextID,name,type, rateVal,status) 
                self.saveVehicle(newVehicle)
                ++self.vehicleNextID

        except (InvalidRentalRates, ValueError) as error:
            print(error)
        
    def viewVehicles(self, viewAll=True):
        with open(self.vehiclesFilename, "r") as file:
            lines = file.readlines()
        print(f"\033[1m{'ID':<10}{'Name':<20}{'Type':<10}{'Rate':<10}{'Availability':<10}\033[0m")
        if len(lines) > 0:
            for v in lines:
                id,name,type,rate,availabity = v.strip().split(",")
                # if not isReady:
                status = 'Available' if availabity == "1" else 'Not Available'
                print(f"{id:<10}{name:<20}{type:<10}{rate:<10}{status:<10}")    
        else:
            print("------------No Vehicles-----------------")

    def viewAvailableVehicles(self):
        pass




