import os
class Movie:

    fileBooking = "booking.txt"
    movies = [[101,"Avengers", 250],
              [102, "Interstellar",200],
              [103, "Inception",180],
              [104, "The Lion King",150],
              [105, "Spider Man", 280]]
    def __init__(self):
        if os.path.exists(self.fileBooking):
            pass
        else:
            file = open(self.fileBooking,"w")
            file.write("")
            file.close()
    
    def movieList(self):
       for movie in self.movies:
           print(movie[0], " - " , movie[1], "- ₹" + str(movie[2]))
    def bookMovieTickets(self, id, number, username):
        bookedMovie = next((m for m in self.movies if m[0]==id), None)
        print(bookedMovie)
        file = open(self.fileBooking,"a")
        file.write(f"{bookedMovie[0]},{bookedMovie[1]},{bookedMovie[2]},{username},{number}\n")
        file.close()
        print("Tickets Reserved ")
        print(f"{bookedMovie[1]} (Tickets: {number}) - ₹{bookedMovie[2]*number}")
        return

    def bookingSummary(self, user):
        file = open(self.fileBooking,"r")
        bookingLines = file.readlines()
        file.close()
        print("===== BOOKING SUMMARY =====")
        for line in bookingLines:    
            b =line.strip().split(",")    
            if b[3] == user:
                print(f"{b[0]} : {b[1]} (Tickets: {b[4]}) - ₹{int(b[2])*int(b[4])}")
        
    def movieReceipt(self, user):
        print("\n===== MOVIE BOOKING RECEIPT =====\n")
        file = open(self.fileBooking,"r")
        bookingLines = file.readlines()
        file.close()
        
        total = 0
        for line in bookingLines:    
            b =line.strip().split(",")    
            if b[3] == user:
                total = total + (int(b[2])*int(b[4]))
                print(f"{b[0]} : {b[1]} (Tickets: {b[4]}) - ₹{int(b[2])*int(b[4])}")
        
        print("\n---------------------------------")
        print("Total Amount", total)


    def removeTickets(self, id, user):
        self.bookingSummary(user)
        file = open(self.fileBooking,"r")
        bookingLines = file.readlines()
        file.close()
        updatedLines = []
        for line in bookingLines:
            details = line.strip().split(",")
            if int(details[0]) == id and  details[3]==user:
                continue
            else:
                updatedLines.append(line)
        with open(self.fileBooking, "w") as file:
            file.writelines(updatedLines)
        print("Your Ticket has been Cancelled")
        
