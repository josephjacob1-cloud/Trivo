from Customer import Customer


customer = Customer()
def main():
    print("WELCOME TO BOOK MY SHOW")
    print("1. Login")
    print("2. Register")
    print("3. Movie List")
    print("4 Exit")
    
    while True:
        try:
            choice = int(input("Enter a number to select : "))
            if choice == 1:
                login()
            elif choice == 2:
                pass
            elif choice == 3:
                pass
            elif choice == 4:
                break
            else:
                raise TypeError
        except ValueError:
            print("wrong input")

        except TypeError:
            print("Wrong selection. Choose again")

def login():
    print("================LOGIN CREDENTIALS==================")
    userName = input("Enter USER NAME : ")
    password = input("PASSWORD : ")
def registratiob():
    print("================LOGIN CREDENTIALS==================")
    userName = input("Enter USER NAME : ")
    password = input("PASSWORD : ")
    customer.CustomerRegistration()
main()