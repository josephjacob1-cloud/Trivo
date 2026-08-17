from fileManager import FileManager
class Customer:
    fileMger = FileManager()
    def __init__(self):
        pass

    def CustomerRegistration(self):
        data = self.fileMger.getCustomerNames()
        print("data", data)
        isUser = (u for u in data if u.strip().split(",")[0]=="lal")
        print(isUser)

    def CustomerLogin(self):
        pass