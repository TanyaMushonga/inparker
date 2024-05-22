#include <ArduinoJson.h>

#define trigPin1 9
#define echoPin1 10
#define trigPin2 7
#define echoPin2 8
#define ledPin1 4
#define ledPin2 5

const float SOUND_SPEED = 0.034;
const int THRESHOLD_DISTANCE = 10;
const char* DEVICE_ID = "ParkingSensor001";
const char* SPOT_ID1 = "Spot1";
const char* SPOT_ID2 = "Spot2";

long duration1, duration2;
int distance1, distance2;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin1, OUTPUT);
  pinMode(echoPin1, INPUT);
  pinMode(trigPin2, OUTPUT);
  pinMode(echoPin2, INPUT);
  pinMode(ledPin1, OUTPUT);
  pinMode(ledPin2, OUTPUT);
}

void loop() {
  // Sensor 1
  digitalWrite(trigPin1, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin1, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin1, LOW);
  duration1 = pulseIn(echoPin1, HIGH);
  distance1 = duration1 * SOUND_SPEED / 2;
  bool objectDetected1 = (distance1 < THRESHOLD_DISTANCE);

  // Sensor 2
  digitalWrite(trigPin2, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin2, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin2, LOW);
  duration2 = pulseIn(echoPin2, HIGH);
  distance2 = duration2 * SOUND_SPEED / 2;
  bool objectDetected2 = (distance2 < THRESHOLD_DISTANCE);

  // Create JSON document
  StaticJsonDocument<256> doc;
  doc["device_id"] = DEVICE_ID;
  JsonArray spots = doc.createNestedArray("spots");
  JsonObject spot1 = spots.createNestedObject();
  spot1["spot_id"] = SPOT_ID1;
  spot1["occupied"] = objectDetected1;
  JsonObject spot2 = spots.createNestedObject();
  spot2["spot_id"] = SPOT_ID2;
  spot2["occupied"] = objectDetected2;

  // Serialize JSON document to a string and send it via Serial
  String jsonData;
  serializeJson(doc, jsonData);
  Serial.println(jsonData);

  // Control LEDs based on object detection
  digitalWrite(ledPin1, objectDetected1 ? HIGH : LOW);
  digitalWrite(ledPin2, objectDetected2 ? HIGH : LOW);

  delay(1000);
}
