import pandas as pd
import json
from datetime import datetime
# read the Excel sheet
df = pd.read_excel('Rural Homicides 1600-1700.xlsx')

# drop rows with NaN or null values
df = df.dropna()

# convert the date column to string format
df['date'] = df['date'].astype(str)

# create a dictionary to store data for each row
data = []
for i, row in df.iterrows():
    datum = {
        "id": row['id'],
        "date": datetime.strptime(row["date"], '%m/%d/%Y').strftime('%Y-%m-%d'),
        "location": row['location'],
        "weapon": row['weapon'],
        "conviction": row['conviction'],
        "description": row['description'],
        "coordinates": {
            "type": "Point",
            "coordinates": [row['latitude'], row['longitude']]
        }
    }
    data.append(datum)

# write the dictionary to a JSON file
with open('data.json', 'w') as f:
    json.dump(data, f)
