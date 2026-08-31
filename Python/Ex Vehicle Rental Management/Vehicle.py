class Vehicle:
    def __init__(self, id, name, type, rate):
        self.vehicle_id = id
        self.vehicle_name = name
        self.vehicle_type = type
        self.rental_rate = rate
        self.available = True

    def setAvailability(self, status):
        self.available = status
        
    def isAvailable(self):
        return self.available