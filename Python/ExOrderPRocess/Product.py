from Order import Order
from Utility import Utility
class Product:
    products = [{"id":1001, "name" :"Laptop", "price":65000, "stock":10},
                {"id":1002, "name" :"Speaker", "price":9999, "stock":3},
                {"id":1003, "name" :"SSD 1TB", "price":12000, "stock":6},
                {"id":1004, "name" :"SD Card", "price":350, "stock":4},
                {"id":1005, "name" :"Ear Phone", "price":1499, "stock":20},
                {"id":1006, "name" :"TV", "price":25000, "stock":1},
                ]
    nextProductId = 1007
    def __init__(self, username):
        self.__username = username
    def viewProducts(self):
        Utility.clear()
        print("---------- AVAILABLE PRODUCTS----------")
        print(f"{'No':<5}{'Item':<15}{'Price':>10}{'Stock':>10}")
        count = 1
        for p in self.products:
            print(f"{count:<5}{p['name']:<15}{p['price']:>10}{p['stock']:>10}")
            count = count+1
    def addNewProducts(self):
        print("--------------ADD ITEMS ---------------")
        while True:
            try:
                name = input("Product Name : ")
                price = float(input("Product Price : "))
                stock = int(input("Enter Stock Count : "))
                newProduct = {"id":self.nextProductId, "name" :name, "price":price, "stock":stock}
                self.products.append(newProduct)
                self.nextProductId = self.nextProductId + 1
                self.viewProducts()
                break
            except ValueError:
                print("Wrong entries : - ")

    def ViewLowStock(self):
        Utility.clear()
        print("-------------- LOW STOCK BELOW 5 -------------")
        print(f"{'No':<5}{'Item':<15}{'Price':>10}{'Stock':>10}")
        count = 1
        for p in self.products:
            if p["stock"] < 5:
                print(f"{count:<5}{p['name']:<15}{p['price']:>10}{p['stock']:>10}")
                count = count+1

    def ChooseProduct(self):
            Utility.clear()
            self.viewProducts()
            print("Choose ITEM Number to Place Order")
            while True:
                try:
                    number = int(input("Enter Item Number : "))
                    quantity = int(input("Required quantity : "))
                    if self.productAvailability(number, quantity) == False:
                        print("Quantity not sufficient")
                    else:
                       selected = self.products[number-1]
                       GST =  self.calculateGST(selected["price"], quantity)
                       print("Your ordered ",selected["name"].title(),": Total including GST : ", GST)
                       self.updateStock(number, quantity)
                       order = Order()
                       order.saveOrders(self.__username, selected["name"], quantity, GST )
                    break
                except ValueError:
                    print("Wrong Porduct details to place order")
                
    def calculateGST(self,amount, quantity):
        productPrice = amount * quantity
        gst = productPrice*18/100
        total = productPrice + gst
        return total
    def updateStock(self, index, quantity):
        stock = int(self.products[index-1]["stock"])
        latest = stock - quantity
        self.products[index-1]["stock"] = latest

    def productAvailability(self, index, quantity):
        if self.products[index-1]["stock"] < quantity:
            return False
        else:
            return True
        