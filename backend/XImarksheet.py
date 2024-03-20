import sys 
import cv2
import pytesseract
from PIL import Image
import matplotlib.pyplot as plt

# Read the image path from command-line arguments
image_path = sys.argv[1]

# Read the image using OpenCV
img = cv2.imread(image_path)

# Convert the image to grayscale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Extract text from the image using pytesseract
extracted_text = pytesseract.image_to_string(gray, lang='eng')

# Display the extracted text
print("Extracted Text:")
print(extracted_text)

# Initialize flags to indicate if the document is legitimate
document_legit = False

# List of keywords/phrases indicating a legitimate 10th marksheet
legit_keywords = ['MUMBAI DIVISIONAL BOARD', 'SECONDARY SCHOOL CERTIFICATE EXAMINATION-STATEMENT OF MARKS', 'certificate', 'marksheet']

# Check for specific keywords or patterns in the extracted text
for keyword in legit_keywords:
    if keyword.lower() in extracted_text.lower():
        document_legit = True
        break

# Display the image
plt.figure(figsize=(10, 10))
plt.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
plt.axis('off')
plt.show()

# Print whether the document is considered legitimate
if document_legit:
    print("The 10th marksheet is considered legitimate.")
else:
    print("The 10th marksheet is not considered legitimate.")
