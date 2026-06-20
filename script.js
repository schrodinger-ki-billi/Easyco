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
const content=document.getElementById('content');
const view=document.getElementById('view');
function boink(view)
{
    view.classList.remove('bounce');
    void view.offsetWidth;
    view.classList.add('bounce');
}
view.addEventListener('click',()=>
{
    boink(view);
});
function adjust(span)
{
    const p=span.parentElement;
    let size=parseFloat(getComputedStyle(span).fontSize);
    const limit=6;
    while((span.scrollWidth>p.clientWidth || span.scrollHeight>p.clientHeight) && size>limit)
    {
        size--;
        span.style.fontSize=size+"px";
    }
}
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
    const console=document.createElement('div');
    console.className='console';
    console.innerHTML=`
    <div class="screen">
    <span>${name}</span>
    </div>
    <p style="display: none;">${place}</p>
    <p class="ingredient" style="display: none;">${pieces}</p>`;
    console.addEventListener('click',()=>
    {
        const image=`
        <div class="image">
        <img src="${pic}" alt="A picture of ${name}">
        </div>`;
        content.innerHTML=`
        <div class="print">
        <div class="text">
        <h2>${name}</h2>
        <p><strong>From:</strong>${place}</p>
        <p><strong>Diet: </strong>${diet}</p>
        <p><strong>Taste: </strong>${taste}</p>
        <p><strong>Difficulty Level: </strong>${diff}</p>
        <p><strong>Allergies: </strong>${allergen && allergen.length>0?allergen.join(','):'None'}</p>
        <h4>Pieces of Love:</h4>
        <p>${pieces}</p>
        <h4>How to Lovebomb:</h4>
        <p>${how}</p>
        <p>This masterpiece has successfully lovebombed to the world 😝😝</p>
        </div>
        ${image}
        </div>`;
        boink(view);
    });
    adjust(console.querySelector("span"));
    let clove=lovelikes?lovelikes:0;
    const love=document.createElement('button');
    love.className='love';
    love.innerHTML=`<img src="https://static.vecteezy.com/system/resources/thumbnails/057/910/814/small/3d-render-of-a-pink-iridescent-glass-heart-with-a-glossy-reflective-surface-isolated-on-a-transparent-background-symbolizing-love-beauty-and-modern-aesthetics-png.png" class="heart"><span class="heartt">${clove}</span>`;
    love.addEventListener('click',async function(event)
    {
        event.stopPropagation();
        clove+=1;
        love.querySelector('.heartt').innerText=clove;
        const userreci=doc(db,'recipes',id);
        await updateDoc(userreci,{lovelikes:increment(1)});
    });
    console.appendChild(love);
    document.getElementById('displayreci').appendChild(console);
}
function searching()
{
    let input=document.getElementById('search').value.toUpperCase();
    let dish=document.getElementsByClassName('console');
    for(let i=0;i<dish.length;i++)
    {
        let name=(dish[i].querySelector("span")?.textContent || "").toUpperCase();
        let place=(dish[i].querySelector("p")?.textContent || "").toUpperCase();
        let pieces=(dish[i].querySelector('.ingredient')?.textContent || "").toUpperCase();
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