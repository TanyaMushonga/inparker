import serial
import json
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from datetime import datetime
# Replace 'path/to/your-firebase-adminsdk.json' with the path to your Firebase Admin SDK private key file
cred = credentials.Certificate('city-smart-parking-firebase-adminsdk-6kg1e-52c2609438.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://city-smart-parking-default-rtdb.firebaseio.com/'  # Replace with your Firebase database URL
})


ser = serial.Serial('COM16', 9600)  # Replace 'COM3' with your Arduino's serial port

previous_status = {}
def send_to_firebase(data):
    now = datetime.now().isoformat()
    data['datetime'] = now
    ref = db.reference('/parking-spots')
    ref.update(data)
    print("Data updated in Firebase:", data)

while True:
    if ser.in_waiting > 0:
        try:
            line = ser.readline().decode('utf-8').strip()
            data = json.loads(line)
            
            # Add coordinates and addresses to each spot
            data['spots'][0]['coordinates'] = {'latitude': -20.132507, 'longitude': 28.626373}
            data['spots'][0]['address'] = 'Lot 1, Fort St, Bulawayo'
            
            data['spots'][1]['coordinates'] = {'latitude': -20.144543, 'longitude': 28.529023}
            data['spots'][1]['address'] = 'Lot 4, 83 Jason Moyo St, Bulawayo'
            
            spot1_status = data['spots'][0]['occupied']
            spot2_status = data['spots'][1]['occupied']
            current_status = (spot1_status, spot2_status)
            if current_status != previous_status.get('status'):
                send_to_firebase(data)
                previous_status['status'] = current_status
        except json.JSONDecodeError:
            print("Failed to decode JSON:", line)
        except Exception as e:
            print("Error:", e)

"""
import serial
import json
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from datetime import datetime

# Replace 'path/to/your-firebase-adminsdk.json' with the path to your Firebase Admin SDK private key file
cred = credentials.Certificate('path/to/your-firebase-adminsdk.json')

firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://your-database-name.firebaseio.com/'  # Replace with your Firebase database URL
})

# Serial configuration
ser = serial.Serial('COM3', 9600)  # Replace 'COM3' with your Arduino's serial port

previous_status = {}

def send_to_firebase(data):
    now = datetime.now().isoformat()
    data['datetime'] = now
    ref = db.reference('/parking-spots')
    ref.update(data)
    print("Data updated in Firebase:", data)

while True:
    if ser.in_waiting > 0:
        try:
            line = ser.readline().decode('utf-8').strip()
            data = json.loads(line)
            
            # Add coordinates and addresses to each spot
            data['spots'][0]['coordinates'] = {'latitude': -20.132507, 'longitude': 28.626373}
            data['spots'][0]['address'] = 'Lot 1, Fort St, Bulawayo'
            
            data['spots'][1]['coordinates'] = {'latitude': -20.144543, 'longitude': 28.529023}
            data['spots'][1]['address'] = 'Lot 4, 83 Jason Moyo St, Bulawayo'
            
            spot1_status = data['spots'][0]['occupied']
            spot2_status = data['spots'][1]['occupied']
            current_status = (spot1_status, spot2_status)
            if current_status != previous_status.get('status'):
                send_to_firebase(data)
                previous_status['status'] = current_status
        except json.JSONDecodeError:
            print("Failed to decode JSON:", line)
        except Exception as e:
            print("Error:", e)

"""
