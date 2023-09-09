$('#cow').on('click', 'div', async (event)=>{
    event.preventDefault();
    const id = event.currentTarget.id;

    if(!id){console.log('MT!!!!!!');return;}
    else{
        console.log(id, '\ttype: ', typeof(id));
        document.location.replace(`/post/${id}`);
    } 
});