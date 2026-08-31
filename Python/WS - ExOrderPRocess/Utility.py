import os

class Utility():

    def clear():
        os.system('cls' if os.name == 'nt' else 'clear')
        # pass