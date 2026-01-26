from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["pbkdf2_sha256"], deprecated="auto")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

# Test with a very long password
long_password = "a" * 1000
hashed = get_password_hash(long_password)
print(f"Hashed length: {len(hashed)}")
print(f"Verification: {verify_password(long_password, hashed)}")

# Test with a normal password
normal_password = "password123"
hashed_normal = get_password_hash(normal_password)
print(f"Normal verification: {verify_password(normal_password, hashed_normal)}")

# Test with a wrong password
print(f"Wrong password verification: {verify_password('wrong', hashed_normal)}")
