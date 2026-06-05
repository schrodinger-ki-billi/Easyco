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
            const recipe=document.createElement('div');
            recipe.className='form-container';
            recipe.style.marginTop='20px';
            recipe.innerHTML=`
            <h2>${name}</h2>
            <p><strong>From:</strong>${place}</p>
            <p>This masterpiece has been successfully lovebombed to the world 😝😝</p>
            `;
            document.body.appendChild(recipe);
        });
    }
});
