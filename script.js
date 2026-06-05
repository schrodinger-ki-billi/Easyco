import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js';
import {getFirestore, collection, addDoc} from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js';
const firebaseConfig=
{
    apiKey: "AIzaSyCnXt4r_pHoaM-gFq5krEbkb4lIoETw1zA",
    authDomain: "easyco-ca035.firebaseapp.com",
    projectId: "easyco-ca035",
    storageBucket: "easyco-ca035.firebasestorage.app",
    messagingSenderId: "601191351860",
    appId: "1:601191351860:web:4cda717b0e9ae27b63ec61",
    measurementId: "G-R9TGSWTKF6"
};
const app=initializeApp(firebaseConfig);
const db=getFirestore(app);
document.addEventListener('DOMContentLoaded',function()
{
    const button=document.querySelector('.lovebomb');
    if(button)
    {
        button.addEventListener('click',async function(event)
        {
            event.preventDefault();
            const name=document.getElementById('name').value;
            const place=document.getElementById('place').value;
            const pieces=document.getElementById('pieces').value;
            const how=document.getElementById('how').value;
            const pic=document.getElementById('pic').value;
                await addDoc(collection(db,'recipes'),
                {
                    name:name,
                    place:place,
                    pieces:pieces,
                    how:how,
                    image:pic
                });
                const recipe=document.createElement('div');
                recipe.className='form-container';
                recipe.style.marginTop='20px';
                const picurl=pic?`<img src="${pic}" alt="Masterpiece" style="max-width:100%;height:auto;margin-top:10px;border-radius:6px;">`:'';
                recipe.innerHTML=`
                <h2>${name}</h2>
                <p><strong>From:</strong>${place}</p>
                ${pic}
                <h4>Pieces of Love:</h4>
                <pre style="white-space:pre-wrap;font-family:inherit;">${pieces}</pre>
                <h4>How to Lovebomb:</h4>
                <pre style="white-space:pre-wrap;font-family:inherit;">${how}</pre>
                <p>This masterpiece has been successfully lovebombed to the world 😝😝</p>
                `;
                document.body.appendChild(recipe);
                button.innerText='✨✨✨✨';
            
        });
    }
});

