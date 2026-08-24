def strike(text):
    return f"\033[9m{text}\033[0m"

print(strike("Hello World"))
print("This text is normal.")

file = open("orfd.txt","a")
file.write("hello")
file.close()