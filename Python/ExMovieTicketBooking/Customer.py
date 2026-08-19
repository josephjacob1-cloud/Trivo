from fileManager import FileManager
class Customer:
    fileMger = FileManager()
    isLogin = False
    username = ""
    def __init__(self):
        pass

    def checkUser(self, username):
        data = self.fileMger.getCustomerNames()
        print("data", data)
        for u in data:
            user = u.strip().split(",")
            userExist=False
            if user[1] == username:
                print(user, ": ", user[1])
                userExist = True  
                print("User Name already exist. Please enter another user name")              
                return userExist
        
    def customerRegistration(self, fullname, username, password):
        self.fileMger.saveUser(fullname.title() + "," + username + "," + password)    

    def customerLogin(self,username, password):
        data = self.fileMger.getCustomerNames()
        for u in data:
            user = u.strip().split(",")
            userExist=False
            if user[1] == username and user[2] == password:
                userExist = True 
                self.username = username
                self.isLogin = userExist
                print("Login Successful")
                return userExist                
            else:
                print("User Name or Password are missmatch!")
            

    
    def getLoginStatus(self):
        return self.isLogin
    def getUsername(self):
        return self.username