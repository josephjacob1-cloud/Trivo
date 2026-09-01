import os
from RentalManagement import RentalManagement
from Exceptions.DuplicateUsername import DuplicateUsername
from Exceptions.InvalidCredentials import InvalidCredentials
from Exceptions.PermissionError import PermissionError

from Admin import Admin
from Customer import Customer

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
            user = None
            if userData == None:
                raise InvalidCredentials("Entered Invalid Credentials. Please try again!")
            else:
                if userData[2] =="admin":
                    user = Admin(name)
                    user.showMenu()
                    # self.showAdminMenu()
                elif userData[2] == "customer":
                    user = Customer(name)
                    user.showMenu()
                    # self.showCustomerMenu()
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

    
    


    
        