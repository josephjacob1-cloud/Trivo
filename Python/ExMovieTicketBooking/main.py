from Customer import Customer


customer = Customer()
def main():
   
    
    while True:
        try:
            print("WELCOME TO BOOK MY SHOW")
            print("1. Login")
            print("2. Register")
            print("3. Movie List")
            print("4 Exit")
            choice = int(input("Enter a number to select : "))
            if choice == 1:
                login()
            elif choice == 2:
                registration()
            elif choice == 3:
                getMovieList()
            elif choice == 4:
                break
            else:
                raise TypeError
        except ValueError:
            print("wrong input")

        except TypeError:
            print("Wrong selection. Choose again")

def login():
    while True:
        print("================LOGIN CREDENTIALS==================")
        userName = input("Enter USER NAME : ")
        password = input("PASSWORD : ")
        if customer.customerLogin(userName, password):
            getCustomerMenu()
def registration():
    while True:
        print("================REGISTRATION==================")
        fullName = input("Enter Your FULL NAME : ")
        userName = input("Enter USER NAME : ")
        password = input("PASSWORD : ")
        if customer.checkUser(userName):
            pass
        else:
            customer.customerRegistration(fullName, userName, password)
            break

def getMovieList():
    movies = Movie()

def getCustomerMenu():
    while True:
        print("===============CUSTOMER MENU==========================")
        print("1 Movies List")
        print("2 Movie Tickets")
        print("3 Remove Tickets")
        print("4 View Booking Summary")
        print("5 Booking Receipt")
        print("6 Back")

main()