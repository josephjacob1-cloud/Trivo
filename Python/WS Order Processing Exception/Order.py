class Order:
    GST = .18
    def __init__(self, name, product, quantity):
        self.customerName = name
        self.product = product
        self.quantity = quantity
        self.total = self.calculate_total()

    def calculate_total(self):
        total = self.quantity * self.product.price
        final = total + (total * self.GST)
        return final

    def printOrder(self):
        return f"{self.customerName},{self.product.name},{self.quantity},{self.total}\n"