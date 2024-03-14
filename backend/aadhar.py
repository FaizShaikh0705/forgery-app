import easyocr
import cv2
import matplotlib.pyplot as plt

# Read text from image using EasyOCR
reader = easyocr.Reader(['en'])
result = reader.readtext('/content/aadharcard.jpg', paragraph=True)
print("Extracted Text:")
for detection in result:
    print(detection[1])

# Load image using OpenCV
img = cv2.imread('/content/aadharcard.jpg')

# Initialize flags to indicate if the document is legit and if it contains the document holder's picture
document_legit = False
has_picture = False

# List of keywords/phrases indicating a legitimate document
legit_keywords = ['Unique Identification Authority of India', 'Aadhaar']

# Check for specific keywords or patterns in the extracted text
for detection in result:
    text = detection[1].lower()  # Convert text to lowercase for case-insensitive matching
    for keyword in legit_keywords:
        if keyword.lower() in text:
            document_legit = True
            break
    if document_legit:
        break  # Break the loop if a legitimate keyword is found

# Perform face detection using OpenCV
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

# If faces are detected, consider the document to have the document holder's picture
if len(faces) > 0:
    has_picture = True

# Display the image with bounding boxes
plt.figure(figsize=(10, 10))
plt.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
plt.axis('off')

# Draw bounding boxes around detected faces
for (x, y, w, h) in faces:
    img = cv2.rectangle(img, (x, y), (x+w, y+h), (255, 0, 0), 2)

plt.show()

# Print whether the document is considered legit and whether it contains the document holder's picture
if document_legit and has_picture:
    print("The Aadhaar card is considered legitimate and contains the document holder's picture.")
elif document_legit:
    print("The Aadhaar card is considered legitimate but may not contain the document holder's picture.")
else:
    print("The Aadhaar card is not considered legitimate.")