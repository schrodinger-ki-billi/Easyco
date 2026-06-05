document.addEventListener('DOMContentLoaded',function()
{
    const button=document.querySelector('.lovebomb');
    if(button)
    {
        button.addEventListener('click',function(event)
        {
            event.preventDefault();
            const name=document.getElementById('name').value;
            const place=document.getElementById('place').value;
            const pieces=document.getElementById('pieces').value;
            const how=document.getElementById('how').value;
            const picture=document.getElementById('picture');
            let pic='';
            if(picture.files.length>0)
            {
                const turl=URL.createObjectURL(picture.files[0]);
                pic=`<img src="${turl}" alt="Masterpiece" style="max-width:100%;height:auto;margin-top:10px;border-radius:6px;">`;
            }
            const recipe=document.createElement('div');
            recipe.className='form-container';
            recipe.style.marginTop='20px';
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
        });
    }
});

