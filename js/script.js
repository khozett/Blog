const icon = document.querySelectorAll("#icon");
const searchInput = document.querySelector("#search");
const items = document.querySelectorAll("#containerConteudo")



searchInput.addEventListener('input', (e) =>{
    const value = formatString(e.target.value);




    items.forEach(tituloContainer =>{
        if(formatString(tituloContainer.textContent).indexOf(value) !== -1){
            tituloContainer.style.display = "flex";
        }else{
            tituloContainer.style.display = "none";
        }
    })
})

function formatString(value){
    return value
        .toLowerCase()
            .trim();
}


icon.forEach(icon =>{
    
icon.onclick = () => {
    icon.classList.toggle("filled");
  };
  
})


