class Product:
    discount_rate = 0
    def __init__(self, id, name, price, stock):
        self.id = id
        self.name = name
        self.price = price
        self.stock = stock

    def reduce_stock(self, qty):
        if self.stock >= qty:
            self.stock -=qty
            return True
        else:
            return False
    def get_final_price():
        pass