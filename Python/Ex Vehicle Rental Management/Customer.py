from User import User
from Exceptions.InvalidInputValues import InvalidInputValues

from RentalManagement import RentalManagement
class Customer(User):
    def __int__(self, name):
        super().__init__(name)
        self.__username = name
    def display_user(self):
        pass

    def showMenu(self):
        while True:
            try:
                print("\n --------------------CUSTOMER MENU ------------")
                print("1. View Available Vehicles\n2. Rent Vehicle\n3. View My Rentals\n4. Logout")
                choice =  input("Please select your choice : ")
                rental = RentalManagement()
                if choice == "1":
                    rental.viewAvailableVehicles()
                elif choice == "2":
                    rental.rentAVehicle(self.__username)
                elif choice == "3":
                    pass
                elif choice == "4":                   
                    break
                else:
                    raise InvalidInputValues("Entered wrong Input!")

            except (ValueError, InvalidInputValues) as error:
                print(error)