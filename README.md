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
1) My website was initially forgetting my data entries upon refreshing, hence I used DOM manipulation to fix it.
2) I used async and await API handling as without them I faced the error of cannot read property or simply undefined. As my website wasn't waiting for my input and was taking actions immedietely and popping errors, so I used this method to make the website sit and wait.
3) So I have used this
  <img width="588" height="233" alt="Screenshot 2026-06-11 032727" src="https://github.com/user-attachments/assets/8c16fc67-4bc0-480c-b6f7-4f8de1f48391" />

  as I was facing this error
  
  <img width="691" height="262" alt="Screenshot 2026-06-11 030416" src="https://github.com/user-attachments/assets/0dc90eca-e21a-4b1e-80ca-5f4f61925369" />

my HTML refused to read my function when I working with oninput="searching()", hence I decided to make my HTML do nothing, and built the entire calling of the function searching in JavaScript itself

Certain things I added and how:
1) So I added a love count button, that is just like the like button you find on any other social media, but here the user can send as much love as they want, without the 1 like only rule, cause I wished I could like my fav posts on social media like a 1000+ times. Now what I used is the unique identification that comes from the doc package and then using doc.id it puts the likes in the specific id, meaning, the specific post. And updateDoc package is used to use the increment(number) function which helps adding 1 to the current count of love. Now why I specifically chose increment(number) function, because it is atomic, just like the light switch working extremely fast upon pressing, and is also happening on the server's side, so it is impossible for two requests to be overwritten.
Here is how the database looks like:

<img width="1487" height="871" alt="Screenshot 2026-06-14 202754" src="https://github.com/user-attachments/assets/976f13e4-d920-4cff-8a63-42f8dff1f679" />






2) Previously, I was using async and await API handling for my loading function, but I changed it to onSnapshot. Now why?
Initially, by using getDocs, I was working by pulling the data, the HTTP requests. This not only made my connection slower at large scale but also won't update my page automatically. Now that I switched to snapshot, it is much faster, as it works on pushing data, hence creating a tunnel between the server and the browser, helping my function run at lightning speed without refreshing.

3) Used cloud queries like query and orderBy to organize the feed of the website.

4) I've also used array for my allergy section and have used ternary operators in place of if and else for keeping my code clean. I have also used event listener function specifically for the section of "Others". So at the end, inside my document.addEventListener(), I have made checko and texto. Now that entire block of event listener for "Others" section is to make sure that if the user were to add something in the text box of others section and then changes their mind and unchecks the box, that particular text inside of the others' text box, should not be inputted in the database and displayed. If the box unchecks, it is no longer part of the allergens.

5) I also have been using template literals extensively in my code for easy and fast connection between javascript variables and HTML file.

6) I have also used a very important function in my code, event.preventDefault(). This helps me in a lot of wayyy. It prevents a hard refresh on my website, that is, if the user were to lovebomb the recipe, without preventDefault(), the entire onSnapshot would have been restarted, well that is what defeats the function's purpose mentioned above. Also the entire memory of js would have been wiped. So kind of, without this, my website would have been just a static document.


AFTER MAJOR UPDATE!!!! THE WEBSITE'S LAYOUT AND INTERFACE HAS BEEN COMPLETELY POOKIEFIED, HENCE THE DETAILS ON THE NEWER VERSION IS HERE.
IMPORTANT! SOME PREVIOUS POINTS MIGHT NOT BE VALID ANYMORE DUE TO HEAVY UPDATE IN THE METHODS WHICH INCLUDE DELETION OF CERTAIN METHOD BLOCKS, RENAMING SOME METHODS, ETC.
7) HTML: 
i) form tag has been removed and div classes and ids are being used in it's place. Now why did I do that? Simply cause of the intricate designing that I have given to the website. Previously, I couldn't have changed the dropdowns and checkboxes, but now, I not only have changed them according to their website, but also given checkboxes' boxes' ticks a new colour to match my website's vibes. Also I previously was using a very important function for my website and that was in js, named event.preventDefault(). It's function was to simply prevent my website from refreshing when the user pressed the submit button. This refresh was more of a bad refresh that we didn't want like white screen, and even like wiping away the data. Hence, when we use form tag, it does refresh the entire page, giving us these issues. But, by now using div class, I don't need the preventDefault button as div class doesn't does this bad refresh.

JavaScript:
i) Removed preventDefault() as now I was no longer using the form tag, hence no bad refresh happening, hence no prevention needed.
ii) I have added a boink function for the bounce effect on my recipe display window. I have used in it .offsetWidth. This is the most important function used inside of boink as this allows my display window to bounce everytime I press on any of the consoles below. Without this, after one bounce, this animation would have completely stopped.
iii) My adjust() function is pretty simple. I wanted something in my console that if the user enters a very big recipe name, firstly, the letters or words should not come out, and lastly, the letters or words should not get cut short. I wanted the full recipe name inside of the console screen simply. Hence, this function, by using while loop, decreses the default size of the font to fit in the words. It checks the height and width and the size, and decreases it accordingly.
iv) This condition has been added to the loading function. Why you ask?? Simply to prevent the boink of my entire console when I like a recipe by clicking on the like button. The (`h-${change.doc.id}`) in the parameters of document.getElementById() simply helps me to put the like in the particular recipe that I liked by using the id to locate in the database and increase the like count in that particular recipe only and not some random recipe.




<img width="968" height="245" alt="Screenshot 2026-06-22 025946" src="https://github.com/user-attachments/assets/f5fa5261-145a-4657-9671-8c04ac7c10b4" />






v) This inner HTML simply helps us to search using name, place, and ingredients and display that particular console below which contains the search results. In the next picture is how this is connected to actual searching method. Previously I was searching for the results using tags which are now inside of the content.innerHTML. Now there was a huge problem, if I were not to use console.innerHTML, and the user were to do searching the first thing he/she enters the website, it won't have given any results as content.innerHTML is kind of a function which is now locked and won't be accessed by searching function, unlike before, it wasn't trapped inside any event listener.




<img width="610" height="153" alt="Screenshot 2026-06-22 030611" src="https://github.com/user-attachments/assets/06e2dacd-e03e-4591-8c59-0b2b48000b0e" />





<img width="888" height="127" alt="Screenshot 2026-06-22 031932" src="https://github.com/user-attachments/assets/c6e209bd-af28-4404-b3fc-dc1eebb89d4b" />






vi) A very important function has been added to the love event listener which is event.stopPropagation(). Now this function has a major role in not making the website act weird when some likes a recipe. In simple words, without this function, if I were to like a recipe, that particular recipe would have been popped open in the display window. Now this might not have been that big of an issue but I didn't want that to happen. If the user were to accidently tap the like button of some recipe while they were reading something, this would have caused the liked recipe to open up, and if the user were not to remember what they were reading, hence causing the loss of the recipe they were reading. This is just an extra preventive measure for user friendly website.



CSS: (remaining)




Some screenshots of the website's initial days and dry runs:
<img width="1912" height="971" alt="Screenshot 2026-06-06 011701" src="https://github.com/user-attachments/assets/6e4600ba-f393-48ad-bac5-aa4d06b32bcf" />
<img width="1917" height="1023" alt="Screenshot 2026-06-06 011641" src="https://github.com/user-attachments/assets/c166e69a-9d4c-4ded-b724-95e0a6c1a9ea" />
<img width="1913" height="1001" alt="Screenshot 2026-06-06 011558" src="https://github.com/user-attachments/assets/addae256-43b0-4aea-a7b5-88e68853b531" />

Some more dry runs and how the data is stored in my firebase:
<img width="1900" height="912" alt="Screenshot 2026-06-06 224824" src="https://github.com/user-attachments/assets/4dda0e51-6ba2-4762-8bbc-3b7fd430d732" />
<img width="1893" height="968" alt="Screenshot 2026-06-06 224814" src="https://github.com/user-attachments/assets/bb6c4ff9-5899-4729-bc81-335010a8f2c6" />
<img width="1825" height="903" alt="Screenshot 2026-06-06 224233" src="https://github.com/user-attachments/assets/2b495d3d-7a1d-4cf1-a699-bb600767bdee" />

Also, as a beginner, I not only have used my hours building the website, but also learn what I didn't know. I have done various dry runs of functions before actually commiting hence some of my hours are used for learning and not just commiting. Some things were indeed new for me and I often polished and practised on my VS code, inside of my project. I took help from Youtube, Guides of Hack Club, my Copilot was also enabled in the VS code, the heading of the commits are written by AI automatically, and once in a while I took help of Gemini to explain me certain properties of Javascript, help me understand my errors, and for certain cases rectify it for me. I learnt Java for 4 years in my school, and hence my DSA, and properties of OOPs are quite clear. Also, my school has taught me that it is a good practice to write clean codes, and hence my code has proper indentation, and spaces. I usually do add comments as well, but it is just because the school wanted me to. Tbh, I don't need comments to understand my code, hence I didn't put any.
(AI HAS BEEN USED!!!!)

So, I didn't know about local commits and was working on a major update. If I were to commit here in bits and parts, and during that time, if the reviewer were to review my project, the website would have crashed and cause major functions to not work, hence causing a rejection. So for 4 days, I worked for nearly 10 hours daily, totally locked in, even skipping my meals once in a while, making it 40 hours, without me committing anything. I know this is a lot a time without committing but I can guarantee that I have been working on my project, and no cheating whatsoever has been done. Please don't deduct my hours 🥺🥺 pretty please 🥺🥺🥺🥺🥺. I am a sincere child and worked very hard on this update. Also I had a lot of problem pushing this local commit here. I nearly had ruined my commit history. I didn't have any knowledge in how I should be making and pushing commits locally, hance I took the help of Gemini for giving me terminal codes to push it here. I didn't realize that it had overwritten the commit history, but fortunately using Chat GPT further I recovered my old history and merged the 2. Previously there were only index.html, script.js, and style.css, but further Chat GPT's prompts made me add src and .gitignore as well. My hacktime shows 2 branches, whereas my github shows 1. The old history was made to save my 60 commits before I switched to local commits and then pushing them here.




<img width="1470" height="213" alt="Screenshot 2026-06-22 020324" src="https://github.com/user-attachments/assets/5292fef3-30cd-4dbf-bf41-d26c40d9eb6a" />

