import face_recognition as fr

# Load in our reference image of Joe Biden
known_images =[0] *7
biden_encoding=[0]*7
val=''
for x in range(0, 7):
	val = "known_images/"+str(x+1)+".jpg"
	known_images[x]=fr.load_image_file(val)

# known_image = fr.load_image_file("known_images/1.jpg")
# Load in our image of a group of people
unknown_image = fr.load_image_file("unknown_images/test2.jpg")


face_locations = fr.face_locations(unknown_image)
print("Found {} face(s) in this photograph.".format(len(face_locations)))
print('Are you present in this image? - ')

# Create a biden encoding

for x in range(0, 7):
	biden_encoding[x] = fr.face_encodings(known_images[x])[0]
	

# biden_encoding = fr.face_encodings(known_images)[0]
# create an encoding based off our group photo
unknown_encoding = fr.face_encodings(unknown_image)[0]

# Compare the encodings and try to determine if Biden exists within a photo
results = fr.api.compare_faces(biden_encoding, unknown_encoding,tolerance=0.4)
# Print the results
print(results)


