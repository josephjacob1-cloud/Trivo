
def placeOrder():
    customer = input("Customer Name : ")
    product = input("Product Name : ")
    quantity = int(input("Required Qantity : "))
    price = float(input("Unit Price : "))
    total = quantity * price
    finalPrice = applyOffer(total)

    print("\n ---------Order Summary----------")
    print("Customer Name : ", customer)
    print("Product : ", product)
    print("Quantity : ", quantity)
    print("Price per Unit : ", price)
    print("Total Amount : ", total)
    print("Final Payable : ", finalPrice)
    print("----------------------------------\n")

    with open("orders.txt","a") as file:        
        file.write("Customer Name : "+ customer +"\n")
        file.write("Product : "+ product +"\n")
        file.write("Quantity : "+ str(quantity) +"\n")
        file.write("Price per Unit : "+ str(price) +"\n")
        file.write("Total Amount : "+ str(total) +"\n")
        file.write("Final Payable : "+ str(finalPrice) +"\n")
        file.write("-------------------------------------------------\n\n")

    print("order saved successfully!!")

def applyOffer(amount):
    if amount >=5000:
        return amount-(amount*0.20)
    elif amount >=2000:
        return amount - (amount*0.10)
    else:
        return amount

def showOrders():
    with open("orders.txt", "r") as file:
        print(file.read())
username="admin"
adminpassword = "1234"
print("WELCOME TO EMART")

while True:
    user = input("Enter User Name : ")
    password = input("Enter Password : ")
    if (user == username and password == adminpassword):
        print("Login Successful\n")  
        break     
    else:
        print("Invalid username or password!")
while True:
    print("=========== Entered to Order Processing System ===============")
    print("1. Place Order")
    print("2. View All Orders")
    print("3. Exit")
    choice = input("Enter your choice : ")
    if choice == "1":
        placeOrder()
    elif choice == "2":
        showOrders()
    elif choice == "3":
        print("Exiting from Store\nThank You")
        break
    else:
        print("Wrong choice!")


