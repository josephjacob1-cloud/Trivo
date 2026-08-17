from User import User
from Product import Product
from Order import Order
from Utility import Utility

class Customer(User):
    DEVELOPMENT_MODE = False
    order = Order()
    def __init__(self, username, devMode):
        self.DEVELOPMENT_MODE = devMode
        self.__username = username
    def display_user(self):
        while True:
            if self.DEVELOPMENT_MODE:
                choice = 5
            else:
                choice = self.getCustomerMenu()
            products = Product(self.__username);
            if choice ==1:
                products.viewProducts()
            elif choice == 2:
                products.ChooseProduct()
            elif choice == 3:                
                self.order.getTotalOrdrs(self.__username)
            elif choice == 4:                
                break
            else:
                print("Wrong input! Enter proer value")

       


    def getCustomerMenu(self):
        # Utility.clear()
        print(f"------------ Welcome! {self.__username.title()} --------- ")
        print("CUSTOMER MENU" ,"1. View Products","2. Place Order","3. View My Orders","4. Logout",sep="\n", end="\n")
        try:
            number = int(input("Choose a number : "))
            return number
        except ValueError:
            print("Not a valid input")




# from User import User
# class Customer(User):
#    DEVELOPMENT_MODE = False
#    def __init__(self, username, devMode):
#     self.DEVELOPMENT_MODE = devMode
#     self.__username = username

#     def display_userr(self):
#         pass

#     def display_user(self):
#         while True:
#             if self.DEVELOPMENT_MODE:
#                 choice = 5
#             else:
#                 choice = self.getCustomerMenu()
#             if choice ==1:
#                 pass
#             elif choice == 2:
#                 pass
#             elif choice == 3:
#                 pass
#             elif choice == 4:
#                 pass
#             elif choice == 5:
#                 pass
#             else:
#                 print("Wrong input! Enter proer value")    


#     def getCustomerMenu(self):
#         print("Admin Menu" ,"1.	View Products","2.	Place Order","3.	View My Orders","4.	Sort Products","5.	Logout",sep="\n", end="\n")
#         try:
#             number = int(input("Choose a number : "))
#             return number
#         except ValueError:
#             print("Not a valid input")