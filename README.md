# Easyco
Easyco, which stands for Easy cooking apparently was made with one thing in my mind, and that is easy cooking lol. But jokes apart, as now I leave for my college this August, I wanted to make a website where people can add their favorite, easy to make recipes, which anyone, even those who don't the the C of cooking, can make. Students who are in hostel, and don't get home cooked food daily, can really try out these recipes from the comfort which is not so comfortable of their hostel room. 

Not only that, I also myself love cooking which I got from my mother, so the first thing that struck my mind was indeed something anything related to cooking. 
So easyco is where people can post, or just look around for some easy recipes to make. Easyco also makes "I want to make something but don't know whatt!!!!" people less angry 😌😌😌😌. 

You might also notice me pinkify every single thing on the website cause yes, I love barbie, I am barbie, and barbie can do anything.
Now to how I made the website???

For frontend I am using HTML, CSS, and Javascript, and for backend I am using Firebase. I have applied DOM manipulation, await and async API handling. I have a good knowledge of Firebase and have often used it for learning backend before. I also am clear with my basic of HTML and CSS, and have learnt Javascript along with Firebase. 
<img width="1920" height="1080" alt="Screenshot 2026-06-06 223136" src="https://github.com/user-attachments/assets/5b7a4019-a4a3-4269-9995-6da74021e7b7" />
<img width="1920" height="1080" alt="Screenshot 2026-06-06 223129" src="https://github.com/user-attachments/assets/a63f6b57-2cd8-40c8-a908-db982b7812bd" />
<img width="1920" height="1080" alt="Screenshot 2026-06-06 223119" src="https://github.com/user-attachments/assets/a3fd60b6-465d-484a-bf1e-369291dd2afc" />
I am working on VS code and as you can see here as well, it is pink 😌💅🏻✨

Now there were certain things I had planned but it did now go as I wanted it to:
1) I wanted that people could just post the picture of what they cooked, and my initial plan was to make them post a selfie with the food, and hence the variables I used. But unfortunately, I couldn't pay for Blaze plan anymore, and hence couldn't use storage to store the picture sent by the user.
<img width="678" height="527" alt="Screenshot 2026-06-06 020034" src="https://github.com/user-attachments/assets/910e425d-51eb-49fe-9068-13363ee6f6d1" />

This is the error I was getting, while I tried to put user's picture in the storage which I couldn't pay for 😢😢😢😢
Hence, the only fix was to make the user put public URLs of the picture of the food, in the form of string, and not put an image from their personal device.

2) My website has a vulnerability and that is, broken access control. As I am still a beginner, I am yet to learn how to fix this. As without making the entire database public, the user could not post the recipe. Upon submitting the recipe, the console showed error.
<img width="1812" height="905" alt="Screenshot 2026-06-06 223645" src="https://github.com/user-attachments/assets/6f4b408f-95ad-430a-8dbd-04add95b32c0" />
This is what I put inside rules, that makes the website vulnerable to attack, but this also solved my error below
<img width="682" height="117" alt="Screenshot 2026-06-06 023858" src="https://github.com/user-attachments/assets/6ed34d97-b039-4e6d-a858-694a694b235e" />
<img width="705" height="922" alt="Screenshot 2026-06-06 024240" src="https://github.com/user-attachments/assets/c18ab9a6-1f9d-4e67-802b-70e900720ea9" />
I will continue to work on fixing this error for now.

Also there were other problems I faced, along with the ones mentioned above, and how I fixed them:
1) My website was initially forgetting my data entries upon refreshing, hence I used DOM manipulation ro fix it.
2) I used async and await API handling as without them I faced the error of cannot read property or simply undefined. As my website wasn't waiting for my input and was taking actions immedietely and popping errors, so I used this method to make the website sit and wait.

Some screenshots of the website's initial days and dry runs:
<img width="1912" height="971" alt="Screenshot 2026-06-06 011701" src="https://github.com/user-attachments/assets/6e4600ba-f393-48ad-bac5-aa4d06b32bcf" />
<img width="1917" height="1023" alt="Screenshot 2026-06-06 011641" src="https://github.com/user-attachments/assets/c166e69a-9d4c-4ded-b724-95e0a6c1a9ea" />
<img width="1913" height="1001" alt="Screenshot 2026-06-06 011558" src="https://github.com/user-attachments/assets/addae256-43b0-4aea-a7b5-88e68853b531" />

Some more dry runs and how the data is stored in my firebase:
<img width="1900" height="912" alt="Screenshot 2026-06-06 224824" src="https://github.com/user-attachments/assets/4dda0e51-6ba2-4762-8bbc-3b7fd430d732" />
<img width="1893" height="968" alt="Screenshot 2026-06-06 224814" src="https://github.com/user-attachments/assets/bb6c4ff9-5899-4729-bc81-335010a8f2c6" />
<img width="1825" height="903" alt="Screenshot 2026-06-06 224233" src="https://github.com/user-attachments/assets/2b495d3d-7a1d-4cf1-a699-bb600767bdee" />
