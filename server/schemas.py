from pydantic import BaseModel, EmailStr, Field
from typing import Optional

class UserBase(BaseModel):
    username: str
    email: EmailStr
    avatar_url: Optional[str] = None

class UserCreate(UserBase):
    password: str = Field(..., max_length=72)

class UserUpdate(BaseModel):
    username: Optional[str] = None
    avatar_url: Optional[str] = None

class PasswordUpdate(BaseModel):
    old_password: str
    new_password: str = Field(..., max_length=72)

class User(UserBase):
    id: int

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None
