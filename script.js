import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js';
import {getFirestore, collection, addDoc, getDocs, query, orderBy} from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js';
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
async function loadRecipes()
{
    const q=query(collection(db,'recipes'),orderBy('name','asc'));
    const data=await getDocs(q);
    data.forEach((doc)=>
    {
        printing(doc.data().name, doc.data().place, doc.data().pieces, doc.data().how, doc.data().image);
    });
}
function searching()
{
    let input=document.getElementById('search').value.toUpperCase();
    let dish=document.getElementsByClassName('recipe');
    for(let i=0;i<dish.length;i++)
    {
        let name=dish[i].getElementsByTagName("h2")[0].textContent.toUpperCase();
        let place=dish[i].getElementsByTagName("p")[0].textContent.toUpperCase();
        let pieces=dish[i].getElementsByTagName("pre")[0].textContent.toUpperCase();
        if(name.indexOf(input)!=-1 || place.indexOf(input)!=-1 || pieces.indexOf(input)!=-1)
            dish[i].style.display="";
        else
            dish[i].style.display="none";
    }
}
function printing(name, place, pieces, how, pic)
{
    const recipe=document.createElement('div');
    recipe.className='form-container';
    recipe.style.marginTop='20px';
    const picurl=pic?`<img src="${pic}" alt="Masterpiece" style="max-width:100%;height:auto;margin-top:10px;border-radius:6px;">`:'';
    recipe.innerHTML=`
    <h2>${name}</h2>
    <p><strong>From:</strong>${place}</p>
    ${picurl}
    <h4>Pieces of Love:</h4>
    <pre style="white-space:pre-wrap;font-family:inherit;">${pieces}</pre>
    <h4>How to Lovebomb:</h4>
    <pre style="white-space:pre-wrap;font-family:inherit;">${how}</pre>
    <p>This masterpiece has been successfully lovebombed to the world 😝😝</p>
    `;
    document.body.appendChild(recipe);
}
document.addEventListener('DOMContentLoaded',function()
{
    loadRecipes();
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
                printing(name, place, pieces, how, pic);
                button.innerText='✨✨✨✨';
            
        });
    }
    const search=document.getElementById('search');
    if(search)
        search.addEventListener('input',searching);
});
