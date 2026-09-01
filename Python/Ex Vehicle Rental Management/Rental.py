class Rental:
    G_S_T = 0.18
    def __init__(self, rid, uName, vId, vName, days, amount):
        self.username = uName
        self.id= rid
        self.vehicleId = vId
        self.vehicleName = vName
        self.totalDays = days
        self.totalAmount = self.calculateGST(days * amount)

    def calculateGST(self, amount):
        final = amount + (amount * self.G_S_T)
        return final