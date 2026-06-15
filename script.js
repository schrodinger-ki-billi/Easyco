import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js';
import {getFirestore, collection, addDoc, getDocs, query, orderBy, doc, updateDoc, increment, onSnapshot} from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js';
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
function loading()
{
    const q=query(collection(db,'recipes'),orderBy('name','asc'));
    onSnapshot(q,(snapshot)=>
    {
        const refresh=document.getElementById("displayreci");
        refresh.innerHTML="";
        snapshot.forEach((doc)=>
        {
            searchprint(doc.id,doc.data().name, doc.data().place, doc.data().pieces, doc.data().how, doc.data().image,doc.data().lovelikes,doc.data().diet,doc.data().taste,doc.data().diff,doc.data().arr);
        });
    });
}
function searchprint(id,name, place, pieces, how, pic,lovelikes,diet,taste,diff,allergen)
{
    let clove=lovelikes?lovelikes:0;
    const searchreci=document.createElement('div');
    searchreci.className='recipe';
    searchreci.style.marginTop='20px';
    const picurl=pic?`<img src="${pic}" alt="Masterpiece" style="max-width:35%;max-height:300px;margin-top:10px;border-radius:6px;">`:'';
    searchreci.innerHTML=`
    <h2>${name}</h2>
    <p><strong>From:</strong>${place}</p>
    <div class="dtda">
    <p><strong>Diet: </strong>${diet}</p>
    <p><strong>Taste: </strong>${taste}</p>
    <p><strong>Difficulty Level: </strong>${diff}</p>
    <p><strong>Allergies: </strong>${allergen && allergen.length>0?allergen.join(','):'None'}</p>
    </div>
    ${picurl}
    <h4>Pieces of Love:</h4>
    <pre style="white-space:pre-wrap;font-family:inherit;">${pieces}</pre>
    <h4>How to Lovebomb:</h4>
    <pre style="white-space:pre-wrap;font-family:inherit;">${how}</pre>
    <p>This masterpiece has successfully lovebombed to the world 😝😝</p>
    `;
    const love=document.createElement('button');
    love.className='love';
    love.innerText=`🩷 ${clove}`;
    love.addEventListener('click',async function()
    {
        clove+=1;
        love.innerText=`🩷 ${clove}`;
        const userreci=doc(db,'recipes',id);
        await updateDoc(userreci,{lovelikes:increment(1)});
    });
    searchreci.appendChild(love);
    document.getElementById('displayreci').appendChild(searchreci);
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
document.addEventListener('DOMContentLoaded',function()
{
    loading();
    const checko=document.getElementById("others");
    const texto=document.getElementById("textothers");
    checko.addEventListener('change',function()
    {
        if(this.checked)
            texto.style.display="inline-block";
        else
        {
            texto.style.display="none";
            texto.value="";
        }
    });
    const button=document.querySelector('.lovebomb');
    if(button)
    {
        button.addEventListener('click',async function(event)
        {
            event.preventDefault();
            const name=document.getElementById('name').value.trim();
            const place=document.getElementById('place').value.trim();
            const pieces=document.getElementById('pieces').value.trim();
            const how=document.getElementById('how').value.trim();
            const pic=document.getElementById('pic').value.trim();
            const diet=document.getElementById('diet').value;
            const taste=document.getElementById('taste').value;
            const diff=document.getElementById('difficult').value;
            let arr=Array.from(document.querySelectorAll('input[name="allgy"]:checked')).map(k=>k.value);
            if(checko.checked && texto.value.trim() != "")
            {
                const i=arr.indexOf("Others");
                if(i!=-1)
                    arr[i]=texto.value.trim();
            }
            if(name==""||place==""||pieces==""||how==""||pic==""||diet==""||taste==""||diff=="")
            {
                alert("Hawwww 🥺🥺🥺🥺 aren't you forgetting to enter something??");
                return;
            }
            await addDoc(collection(db,'recipes'),
            {
                name:name,
                place:place,
                pieces:pieces,
                how:how,
                image:pic,
                diet:diet,
                taste:taste,
                diff:diff,
                arr:arr
            });
            button.innerText='✨✨✨✨';
            document.getElementById('name').value="";
            document.getElementById('place').value="";
            document.getElementById('pieces').value="";
            document.getElementById('how').value="";
            document.getElementById('pic').value="";
            document.getElementById('diet').value="";
            document.getElementById('taste').value="";
            document.getElementById('difficult').value="";
            texto.value="";
            texto.style.display="none";
            document.querySelectorAll('input[name="allgy"]').forEach(k=>k.checked=false);
        });
    }
    const search=document.getElementById('search');
    if(search)
        search.addEventListener('input',searching);
});
