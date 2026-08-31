from User import User
from Product import Product
from Order import Order
from Utility import Utility
class Admin(User):
    DEVELOPMENT_MODE = False
    order = Order()
    def __init__(self, username, devMode):
        self.DEVELOPMENT_MODE = devMode
        self.__username = username
    def display_user(self):
        Utility.clear()
        while True:
            if self.DEVELOPMENT_MODE:
                choice = 4
            else:
                choice = self.getAdminMenu()
            products = Product(self.__username)
            if choice ==1:                
                products.viewProducts()
            elif choice == 2:
                products.addNewProducts()
            elif choice == 3:
                products.ViewLowStock()
            elif choice == 4:
                self.order.getTotalOrdrs()
            elif choice == 5:
                break
            else:
                print("Wrong input! Enter proer value")

       


    def getAdminMenu(self):
        # Utility.clear()
        print("Admin Menu" ,"1. View Products","2. Add New Product","3. View Low Stock Products ","4. View All Orders","5.Logout",sep="\n", end="\n")
        try:
            number = int(input("Enter a number to select  : "))
            return number
        except ValueError:
            print("Not a valid input")