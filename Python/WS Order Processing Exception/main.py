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

        choice = int(input("Select an option : "))
        if choice == 1:
            manager.showProducts()
        elif choice == 2:
            pass
        elif choice == 3:
            pass
        elif choice == 4:
            pass
        elif choice == 5:
            break
        else:
            print("Invalid input")

main()