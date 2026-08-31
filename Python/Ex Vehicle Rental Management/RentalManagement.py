import os
class RentalManagement:
    filename = "rentals.txt"
    def __init__(self):
        if not os.path.exists(self.filename):
            with open(self.filename, "w") as file:
                file.write("")