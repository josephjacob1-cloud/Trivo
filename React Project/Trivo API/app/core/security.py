from pwdlib import PasswordHash

pwdHash = PasswordHash.recommended()
def create_hash_password(password:str) -> str:
        return pwdHash.hash(password)

def verify_hash_password(password:str, hash_password:str) -> bool:
        return pwdHash.verify(password, hash_password)