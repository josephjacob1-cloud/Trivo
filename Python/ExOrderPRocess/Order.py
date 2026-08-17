import os
from Utility import Utility
class Order:
    ordersFilePath = "orders.txt"
    def __init__(self):
        if os.path.exists(self.ordersFilePath):
            pass
        else:
            file=open(self.ordersFilePath, "w")
            file.write("")
            file.close()
    def getTotalOrdrs(self, user="*"):
        Utility.clear()
        file = open(self.ordersFilePath, "r")
        orderLines = file.readlines()
        file.close()
        orders = []
        for line in orderLines:
            data = line.strip().split(",")
            if user == data[0]:
                orders.append([data[0].title(),data[1],data[2],float(data[3])])
            elif user == "*":
               orders.append([data[0].title(),data[1],data[2],float(data[3])]) 
            else:
                pass
        orders.sort(key=lambda order:order[0])
        print("------------- PLACED ORDERS --------------")
        print(f"{'No':<5}{'Customer':<15}{'Item':<15}{'Quantity':<10}{'Total':>10}")
        count = 1
        for customer in orders:
            print(f"{count:<5}{customer[0]:<15}{customer[1]:<15}{customer[2]:<10}{customer[3]:>10.2f}")
            count = count+1

    

    def saveOrders(self, user, item, quantity,amount):
        file = open(self.ordersFilePath,"a")
        file.write(f"{user}, {item}, {quantity}, {amount}\n")
        file.close()