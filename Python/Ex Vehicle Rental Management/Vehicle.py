class Vehicle:
    def __init__(self, id, name, type, rate, regNo = None):
        self.id = id
        self.name = name
        self.type = type
        self.rate = rate
        self.available = 1
        self.regNo = regNo

    def setAvailability(self, status):
        self.available = status
        
    def isAvailable(self):
        return self.available