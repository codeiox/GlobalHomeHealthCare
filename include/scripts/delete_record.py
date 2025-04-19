# delete_record.py

import mysql.connector
from dotenv import load_dotenv
import os


# Python script to delete all the data from the database

conn = mysql.connector.connect(
    host=os.getenv("DB_HOST"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASS"),
    database=os.getenv("DB_NAME")
)

cursor = conn.cursor()

cursor.execute("DELETE FROM applications")
conn.commit()
print("All records deleted.");