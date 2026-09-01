import os
from Vehicle import Vehicle
from Rental import Rental
from Exceptions.InvalidRentalRates import InvalidRentalRates
from Exceptions.InvalidVehicleIDs import InvalidVehicleIDs
class RentalManagement:
    filename = "rentals.txt"
    vehiclesFilename= "vehicles.txt"
    vehicleNextID = 1001
    rentalNextID = 1
    username = ""
    def __init__(self):
        if not os.path.exists(self.filename):
            with open(self.filename, "w") as file:
                file.write("")
        else:
            with open(self.filename, "r") as file:
                lines = file.readlines()
                last_line = lines[-1] if lines else "File is empty"
                self.rentalNextID = self.rentalNextID + len(lines)

        if not os.path.exists(self.vehiclesFilename):
            with open(self.vehiclesFilename, "w") as file:
                file.write("")
        else:
            with open(self.vehiclesFilename, "r") as file:
                lines = file.readlines()
                self.vehicleNextID = self.vehicleNextID +len(lines) 

#  ADMIN FUNCTIONALITIES ---------------
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
        
    def viewAllVehicles(self, viewAll=True):
        with open(self.vehiclesFilename, "r") as file:
            lines = file.readlines()
        if viewAll:
            print("------ALL VEHICLES---------")
        else:
            print("------AVAILABLE VEHICLES---------")
        print(f"\033[1m{'ID':<10}{'Name':<20}{'Type':<10}{'Rate':<10}{'Availability':<10}\033[0m")
        if len(lines) > 0:
            for v in lines:
                id,name,type,rate,availabity = v.strip().split(",")                
                status = 'Available' if availabity == "1" else 'Not Available'
                if viewAll:
                    print(f"{id:<10}{name:<20}{type:<10}{rate:<10}{status:<10}")    
                else:
                    if availabity == "1":
                        print(f"{id:<10}{name:<20}{type:<10}{rate:<10}{status:<10}")
        else:
            print("------------No Vehicles-----------------")

    def viewAvailableVehicles(self):
        self.viewAllVehicles(False)

    def viewRentedVehicle(self):
        with open(self.filename, "r") as file:
            lines = file.readlines()
            print(f"\033[1m{'ID':<10}{'User Name':<10}{'Vehicle ID':<10}{'Vehicle':<10}{'Days':<10}{'Total Amount':<10}\033[0m")
            if len(lines) > 0:
                for rent in lines:
                    id, user, vid, vName, days, amount = rent.strip().split(",")
                    print(f"{id:<10}{user:<10}{vid:<10}{vName:<10}{days:<10}{float(amount):<10.2f}")
            else:
                print("------------No Rental Vehicles-----------------")


#  CUATOMER FUNCTIONALITIES ------------------
    def rentAVehicle(self, uName):
        self.username = uName
        self.viewAllVehicles(False)
        print("Choose Your Vehicle")
        try:
            vID = input("Enter Vehicle ID : ")
            days = int(input("Total Number of Days : "))

            vehicle = self.getVehicle(vID)
            if vehicle == None:
                print("NOT AVAILABLE")
                raise InvalidVehicleIDs(vID + " is not available")
            else:
                print("vID is available" )
                rent = Rental(self.rentalNextID,self.username,vehicle[0],vehicle[1],days,float(vehicle[3]))
                print("\nDetails Of Rental Vehicle")
                print(f"Rental ID: {rent.id}\nVehicle: {rent.vehicleName}\nNumber of Days: {rent.totalDays}\nTotal Amount (GST): {rent.totalAmount:.2f}")
                self.saveRental(rent)
                ++self.rentalNextID

        except (ValueError, InvalidVehicleIDs) as error:
            print(error)


    def getVehicle(self, id):
        with open(self.vehiclesFilename, "r") as file:
            lines = file.readlines()
            for v in lines:
                data = v.strip().split(",")                
                if data[0]==id and data[4] == "1":
                    return data

        return

    def saveRental(self, rent:Rental):
        with open(self.filename, "a") as file:
            file.write(f"{rent.id},{rent.username},{rent.vehicleId},{rent.vehicleName},{rent.totalDays},{rent.totalAmount}\n")

