class User:
    __username = ""
    def __init__(self, name):
        self.__username = name
        print("user = ",self.__username)

    def display_user(self):
        return self.__username