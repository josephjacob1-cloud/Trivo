import os
class FileManager():
    usersFilePath = "users.txt"
    def __init__(self):
        if os.path.exists(self.usersFilePath):
            pass
        else:
            file=open(self.usersFilePath, "w")
            file.write("admin admin123 admin\n")
            file.close()
        self.userDate = None   
         
    def findUser(self, username, password, type):
        file = open(self.usersFilePath,"r")
        userLists = file. readlines()
        for user in userLists:
            data = user.strip().split(" ")
            if type == "login":
                if data[0] == username and data[1] == password:
                    file.close()
                    self.userDate = data
                    return data
            else:
                if data[0] == username:
                    file.close()
                    self.userDate = data
                    return data
        
        file.close()
        return None
    def verifyUser(self, password):
        pass

    def registerUser(self, username, password):
        file = open(self.usersFilePath,"a")
        file.write(username+" " +password+ " customer \n")
        file.close()
        self.userDate = [username, password, "customer"]
        return self.userDate
       
        

