import re
from Product import Product
from Order import Order
from Exceptions.InvalidNumericInputs import InvalidNumericInputs
from Exceptions.InvalidProductID import InvalidProductID
from Exceptions.InsufficentStockExcemption import InsufficentStockExcemption
class OrderManager:
    fileName = "Order.txt"
    def __init__(self):
        self.products = [
            Product(1, "Choclate", 150, 10),
            Product(2, "Frooty", 20,5),
            Product(3, "Mercelys", 450, 5),
            Product(4, "Oreo", 30, 3),
            Product(5, "Tholur Pickle", 50, 3),
            Product(6, "GVR Pappadam", 30, 0)
        ]


      

    def showProducts(self):
        print("--------------Available Products------------".upper())
        for product in self.products:    
           if product.stock > 0:
                print(f"ID: {product.id} | {product.name} | {product.price} | {product.stock}")
           else:
               print(self.strike(f"ID: {product.id} | {product.name} | {product.price} | {product.stock}"))

    def searchProduct(self):
        pass

    def placeOrder(self):
        try:
            customerName = input("Enter Customer Name : ").strip()
            if not customerName or not self.validateName(customerName):
                raise InvalidNumericInputs("Customer name cannot be empty")
            self.showProducts()
            try:
                prID = int(input("Enter Product ID : "))
                if not prID:
                    raise InvalidNumericInputs("Product ID must be Number")
            except InvalidNumericInputs as error:
                print(error)
            selectedProduct = self.getProduct(prID)

            try:
                quantity = int(input("Enter required quantity : "))
                if not quantity:
                    raise InvalidNumericInputs("Quantiry must be Number")                
            except InvalidNumericInputs as error:
                print(error)

            if quantity <=0:
                raise InvalidNumericInputs("Quantity must be above zero ")
            if not selectedProduct.reduce_stock(quantity):
                raise InsufficentStockExcemption("Insufficient stock")
            order = Order(customerName,selectedProduct, quantity)
            with open(self.fileName, "a") as file:
                file.write(order.printOrder())
            print("\n Order Placed Successfully")
            print(f"Customer : {order.customerName}")
            print(f"Product : {order.product.name}")
            print(f"Quantity : {order.quantity}")
            print(f"Total : {order.total}")

        except (InvalidNumericInputs,
                InsufficentStockExcemption,
                InvalidProductID) as error:
            print(error)
        except Exception as error:
            print("Unexpected Error : ", error)    

    def getProduct(self, id):
        product = None
        for p in self.products:
            if p.id == id:
                product = p                
        if product is None:
            raise InvalidProductID("Product ID is not correct")
        return product
                
    def searchOrderByCustomer(self):
        try:
            searchKey = input("\nEnter Customer Name : ").strip().lower()
            orders = False
            with open(self.fileName, "r") as file:
                lines = file.readlines()
                try:
                    for line in lines:
                        details = line.strip().split(",")
                        if details[0] == searchKey:
                            print(f"Customer : {details[0]} | Product : {details[1] } | Quantiry : {details[2]} | Total : ₹{details[3]}")
                            orders = True
                    if not orders:
                        print("No order found  for the customer ")

                    if not searchKey:
                        raise InvalidNumericInputs("Search name should be proper")
                except ValueError as error:
                    print(error)        

        except InvalidNumericInputs as error:
            print(error)
        except Exception as error:
            print(error)

    def viewAllOrders(self):
        print("\n Order History")
        try:

            with open(self.fileName, "r") as file:
                data = file.readlines()
                for order in data:
                  details =  order.strip().split(",")
                  print(f"Customer : {details[0]} | Product : {details[1] } | Quantiry : {details[2]} | Total : ₹{details[3]}")
        except ValueError:
            print("Invalid record found. Skipped.")
        except Exception as error:
            print(error)

    def saveOrders(self):
        pass

    def showOrders(self):
        pass

    def strike(self,text):
        return f"\033[9m{text}\033[0m"

    def validateName(self, text):
        if re.search(r"[^A-Za-z\s]", text):
            print("Invalid name: contains special characters")
            return False
        else:
            print("Valid name")
            return True
