import os
from RentalManagement import RentalManagement
from Exceptions.DuplicateUsername import DuplicateUsername
from Exceptions.InvalidCredentials import InvalidCredentials
from Exceptions.PermissionError import PermissionError
from Exceptions.InvalidInputValues import InvalidInputValues
class FileManager:
    filename = "users.txt"
    def __init__(self):
        if not os.path.exists(self.filename):
            with open(self.filename,"w") as file:
                file.write("admin,admin123,admin\n")

    def register(self):
        print("------------Customer Registration---------------")
        name = input("Enter User Name : ").strip()
        password = input("Set Password : ")
        try:
            if self.checkUser(name):
                raise DuplicateUsername("User Name Exists. Please Try again ")
            else:
               self.saveUser(name, password) 
        except DuplicateUsername as error:
            print(error)
        

    def checkUser(self, name):
        with open(self.filename, "r") as file:
            users = file.readlines()
            exist = False
        for u in users:
            data = u.strip().split(",")
            if(data[0] == name and not exist):
                exist = True
        return exist

    def saveUser(self, name, pwd):
        with open(self.filename, "a") as file:
            file.write(f"{name},{pwd},customer\n")

        print("Registered Successfully. Please Login!\n\n")

        
    def login(self):
        print("-------Log In ------------")
        name = input("Enter User Name : ").strip()
        password = input("Enter Password : ")
        try:
            userData = self.verifyUser(name, password)
            if userData == None:
                raise InvalidCredentials("Entered Invalid Credentials. Please try again!")
            else:
                if userData[2] =="admin":
                    self.showAdminMenu()
                elif userData[2] == "customer":
                    self.showCustomerMenu()
                else:
                    raise PermissionError("Permission restrocted for the User")
        except InvalidCredentials as error:
            print(error)


        

    def verifyUser(self, name, pwd):
        with open(self.filename, "r") as file:
            users = file.readlines()            
        for u in users:
            data = u.strip().split(",")
            if(data[0]==name and data[1]==pwd):
                return data
        return    

    def showAdminMenu(self):
        while True:
            try:
                print("\n --------------------ADMIN MENU ------------")
                print("1. View Vehicles \n2. Add Vehicle\n3. View Available Vehicles\n4. View Rented Vehicles\n5. View All Rentals\n6. Logout")
                choice =  input("Please select your choice : ")
                rental = RentalManagement()
                if choice == "1":
                    rental.viewVehicles()
                elif choice == "2":
                    rental.addVehicle()
                elif choice == "3":
                    pass
                elif choice == "4":
                    pass
                elif choice == "5":
                    pass
                elif choice == "6":
                    break
                else:
                    raise InvalidInputValues("Entered wrong Input!")

            except (ValueError, InvalidInputValues) as error:
                print(error)

    def showCustomerMenu(self):
        while True:
            try:
                print("\n --------------------CUSTOMER MENU ------------")
                print("1. View Available Vehicles\n2. Rent Vehicle\n3. View My Rentals\n4. Logout")
                choice =  input("Please select your choice : ")
                if choice == "1":
                    pass
                elif choice == "2":
                    pass
                elif choice == "3":
                    pass
                elif choice == "4":                   
                    break
                else:
                    raise InvalidInputValues("Entered wrong Input!")

            except (ValueError, InvalidInputValues) as error:
                print(error)


    
        