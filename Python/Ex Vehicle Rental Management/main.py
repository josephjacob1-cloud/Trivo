from FileManager import FileManager
from Exceptions.InvalidInputValues import InvalidInputValues


def main():
    print("----------Welcome to Vehicle Rental System-----------")    
    manage = FileManager()
    try:
        while True:
            print("1. Register Customer")
            print("2. Login")
            print("3. Exit")
            choice = input("Enter Your Choice : ")
            if choice == "1":
                manage.register()
            elif choice == "2":
                manage.login()
            elif choice == "3":
                break
            else:
                raise InvalidInputValues("Entered wrong Input!")

    except (InvalidInputValues, TypeError, ValueError) as error:
        print(error)
    




main()