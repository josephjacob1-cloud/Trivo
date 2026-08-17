import os
class FileManager:
    fileName = "customer.txt"
    def __init__(self):
        print("file path" , os.path.exists(self.fileName))
        if os.path.exists(self.fileName):
            pass
        else:
            file =open(self.fileName, "w")
            file.write("----")
            file.close()
            print("file created")

    def getCustomerNames(self):
        file =open(self.fileName, "r")
        data = file.readlines()
        file.close()
        return data