import psycopg2

def get_cursor():
 conn = psycopg2.connect(dbname=”mappingviolence”, user=”postgres”, password=”admin”, host=”db”)
 cursor = conn.cursor()
 return cursor

 