from Product import Product
class OrderManager:
    def __init__(self):
        self.products = [
            Product(1, "Choclate", 150, 10),
            Product(2, "Frooty", 20,5),
            Product(3, "Mercelys", 450, 5),
            Product(4, "Oreo", 30, 3),
            Product(5, "Tholur Pickle", 50, 3)
        ]


      

    def showProducts(self):
        print("Available Products")
        for product in self.products:           
           print(f"ID: {product.id} | {product.name} | {product.price} | {product.stock}")

    def searchProduct(self):
        pass

    def placeOrder(self):
        pass

    def searchOrderByCustomer(self):
        pass

    def viewAllOrders(self):
        pass

    def saveOrders(self):
        pass

    def showOrders(self):
        pass