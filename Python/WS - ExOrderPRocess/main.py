from FileManager import FileManager
from Admin import Admin
from Customer import Customer
from Utility import Utility

DEVELOPMENT_MODE = False
fileMgr = FileManager()
def start():
    DEVELOPMENT_MODE = False
    Utility.clear()  
        
    while True:
        if DEVELOPMENT_MODE:
            choice = 1
        else:
            choice = getMainMenu()
            print("choice = ", choice)
        if choice == 1:
            login()
        elif choice ==2:
            register()
        elif choice == 3:
            print("Thank You!")
            break
        else:
            print("Wrong input! Try again ")

def register():
    Utility.clear()
    while True:
        print("------------ REGISTER--------------")
        username = input("Enter username : ")
        password = input("Enter password : ")
        if username.strip() != "" and password.strip() != "":            
            userData = fileMgr.findUser(username, password, "register") 
            if userData is not None:
                print("USERNAME already exist! Please choose another user name")
            else:
                save = fileMgr.registerUser(username, password) 
                print("Registration completed!")
                break
        else:
            print("Entered value is not proper")

def login():
    Utility.clear()
    print("---------LOGIN CREDENTIALS ------------")
    username = input("Enter username : ")
    password = input("Enter password : ")
    userData = fileMgr.findUser(username, password, "login")    
    if userData is None:
        return
    else:
       print("Login Success")
       if(userData[2] == "admin"):
           user = Admin(username, DEVELOPMENT_MODE)
           user.display_user()
       elif (userData[2] == "customer"):
           user = Customer(username, DEVELOPMENT_MODE)
           user.display_user()
       else:
           pass
       



def getMainMenu():
    print("---MAIN MENU----","1 - Login", "2 - Register","3 - Exit", sep="\n")
    try:
        number = int(input("Choose a number : "))
        return number
    except ValueError:
        print("Not a valid input")

start()