import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js';
import {getFirestore, collection, addDoc, query, orderBy, doc, updateDoc, increment, onSnapshot} from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js';
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
        snapshot.docChanges().forEach((change)=>
        {
            const data=change.doc.data();
            if(change.type=="added")
                searchprint(change.doc.id,data.name,data.place,data.pieces,data.how,data.image,data.lovelikes,data.diet,data.taste,data.diff,data.arr);
            else if(change.type=="modified")
            {
                if(document.getElementById(`h-${change.doc.id}`))
                    document.getElementById(`h-${change.doc.id}`).innerText=data.lovelikes;
            }
        });
    });
}
function searchprint(id,name, place, pieces, how, pic,lovelikes,diet,taste,diff,allergen)
{
    const con=document.createElement('div');
    con.className='console';
    const screen=document.createElement('div');
    screen.className='screen';
    const ns=document.createElement('span');
    ns.textContent=name;
    const placeser=document.createElement('p');
    placeser.style.display='none';
    placeser.textContent=place;
    const pieceser=document.createElement('p');
    pieceser.className='ingredient';
    pieceser.style.display='none';
    pieceser.textContent=pieces;
    screen.appendChild(ns);
    con.append(screen,placeser,pieceser);
    con.addEventListener('click',()=>
    {
        content.replaceChildren();
        const n=document.createElement('h2');
        n.textContent=name;
        const text=document.createElement('div');
        text.className='text';
        const print=document.createElement('div');
        print.className='print';
        const bfrom=document.createElement('p');
        bfrom.innerHTML='<strong>From: </strong>';
        bfrom.append(document.createTextNode(place));
        const bdiet=document.createElement('p');
        bdiet.innerHTML='<strong>Diet: </strong>';
        bdiet.append(document.createTextNode(diet));
        const btaste=document.createElement('p');
        btaste.innerHTML='<strong>Taste: </strong>';
        btaste.append(document.createTextNode(taste));
        const bdiff=document.createElement('p');
        bdiff.innerHTML='<strong>Difficulty: </strong>';
        bdiff.append(document.createTextNode(diff));
        const ballergy=document.createElement('p');
        ballergy.innerHTML='<strong>Allergies: </strong>';
        ballergy.append(document.createTextNode(allergen && allergen.length>0?allergen.join(','):'None'));
        const pieceprint=document.createElement('h4');
        pieceprint.textContent='Pieces of Love: ';
        const pieceinput=document.createElement('p');
        pieceinput.textContent=pieces;
        const howprint=document.createElement('h4');
        howprint.textContent='How to Lovebomb: ';
        const howinput=document.createElement('p');
        howinput.textContent=how;
        const end=document.createElement('p');
        end.textContent='This masterpiece has successfully lovebombed to the world 😝😝';
        text.append(n,bfrom,bdiet,btaste,bdiff,ballergy,pieceprint,pieceinput,howprint,howinput,end);
        const imbox=document.createElement('div');
        imbox.className='image';
        const image=document.createElement('img');
        image.src=pic;
        image.alt=`A picture of ${name}`;
        imbox.appendChild(image);
        print.append(text,imbox);
        content.appendChild(print);
        boink(view);
    });
    adjust(ns);
    let clove=lovelikes?lovelikes:0;
    const love=document.createElement('button');
    love.className='love';
    const himg=document.createElement('img');
    himg.src='https://static.vecteezy.com/system/resources/thumbnails/057/910/814/small/3d-render-of-a-pink-iridescent-glass-heart-with-a-glossy-reflective-surface-isolated-on-a-transparent-background-symbolizing-love-beauty-and-modern-aesthetics-png.png';
    himg.className='heart';
    const hcou=document.createElement('span');
    hcou.className='heartt';
    hcou.id=`h-${id}`;
    hcou.textContent=clove;
    love.append(himg,hcou);
    love.addEventListener('click',async function(event)
    {
        event.stopPropagation();
        try
        {
            clove+=1;
            hcou.textContent=clove;
            const userreci=doc(db,'recipes',id);
            await updateDoc(userreci,{lovelikes:increment(1)});
        }
        catch(error)
        {
            clove-=1;
            hcou.textContent=clove;
            alert("Try sending love again");
            console.error(error);
        }
    });
    con.appendChild(love);
    document.getElementById('displayreci').appendChild(con);
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
    if(checko && texto)
    {
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
    }
    const button=document.querySelector('.lovebomb');
    if(button)
    {
        button.addEventListener('click',async function(event)
        {
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
            try
            {
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
                    arr:arr,
                    lovelikes:0
                });
            }
            catch(error)
            {
                alert("Try lovebombing again");
                console.error(error);
            }
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
