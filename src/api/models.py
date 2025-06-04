from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Boolean, Integer

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(Integer, primary_key=True)
    email = db.Column(String(120), unique=True, nullable=False)
    password = db.Column(String(255), nullable=False)
    is_active = db.Column(Boolean(), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
        }

class Participation(db.Model):
    id = db.Column(Integer, primary_key=True)
    name = db.Column(String(120), nullable=False)
    phone = db.Column(String(50), nullable=False)
    number = db.Column(Integer, nullable=False, unique=True)  # único número entre 0 y 99

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "phone": self.phone,
            "number": self.number
        }
