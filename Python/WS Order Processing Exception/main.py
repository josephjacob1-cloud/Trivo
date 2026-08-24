from OrderManager import OrderManager


def main():
    manager = OrderManager()
    while True:
        print("\n========= ORDER PROCESSING & FULFILMENT =========")
        print("1. View Products")
        print("2. Place Order")
        print("3. View Order History")
        print("4. Search Order")
        print("5. Exit")

        choice = input("Select an option : ")
        if choice == "1":
            manager.showProducts()
        elif choice == "2":
            manager.placeOrder()
        elif choice == "3":
            manager.viewAllOrders()
        elif choice == "4":
            manager.searchOrderByCustomer()
        elif choice == "5":
            break
        else:
            print("Invalid input")


main()