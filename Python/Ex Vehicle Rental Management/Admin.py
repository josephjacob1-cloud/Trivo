from User import User
from RentalManagement import RentalManagement
from Exceptions.InvalidInputValues import InvalidInputValues
class Admin(User):
    def __int__(self, name):
        super().__init__(name)
        __username = name
    def display_user(self):
        pass

    def showMenu(self):
        while True:
            try:
                print("\n --------------------ADMIN MENU ------------")
                print("1. View Vehicles \n2. Add Vehicle\n3. View Available Vehicles\n4. View Rented Vehicles\n5. Logout")
                choice =  input("Please select your choice : ")
                rental = RentalManagement()
                if choice == "1":
                    rental.viewAllVehicles()
                elif choice == "2":
                    rental.addVehicle()
                elif choice == "3":
                    rental.viewAvailableVehicles()
                elif choice == "4":
                    rental.viewRentedVehicle()               
                elif choice == "5":
                    break
                else:
                    raise InvalidInputValues("Entered wrong Input!")

            except (ValueError, InvalidInputValues) as error:
                print(error)
    