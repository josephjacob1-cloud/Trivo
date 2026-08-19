from Customer import Customer
from Movie import Movie;


customer = Customer()
movie = Movie()

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
            break
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
        print("6 LogOut")        
        try:
            choice = int(input("Please choose a number : "))
            if choice == 1:                
                movie.movieList()
            elif choice == 2:
                movie.movieList()
                movieTickets()
                
            elif choice == 3:
                movie.bookingSummary(customer.getUsername())
                removeTickets()
            elif choice == 4:
                movie.bookingSummary(customer.getUsername())
            elif choice == 5:
                movie.movieReceipt(customer.getUsername())
            elif choice == 6:
                break
            else:
                 print("Please try again")



            

        except TypeError:
            print("Wrong input")
def removeTickets():
    while True:
        try:
            id = int(input("Enter Movie ID : "))
            movie.removeTickets(id, customer.getUsername())
            break
        except TypeError:
            print("Enter Proper value")
    
def movieTickets():
    while True:
        try:
            id = int(input("Enter Movie ID : "))
            count = int(input("Enter Number of Tickets : "))
            movie.bookMovieTickets(id,count,customer.getUsername())
            break
        except ValueError:
            print("Wrong Input")
main()