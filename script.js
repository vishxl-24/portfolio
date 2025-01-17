console.log("JavaScript file is connected successfully!");


const modebtn=document.querySelector('.mode button');
const header=document.querySelector('header');
const headerAnchors = header.querySelectorAll("a"); 

function changemode(){
    if(localStorage.getItem("data-theme")=== "dark"){
        localStorage.setItem("data-theme","light");
        modebtn.innerHTML='<i class="fa-regular fa-moon"></i>'
    } else{
        localStorage.setItem("data-theme","dark");
        modebtn.innerHTML='<i class="fa-regular fa-sun"></i>'
    }
    modefunc(document.body);
    modefunc(modebtn);
    modefunc(header);
}

modebtn.addEventListener("click",changemode);

window.addEventListener("DOMcontentLoaded", ()=> {
    localStorage.getItem("data-theme")=== null ?
    localStorage.setItem("data-theme","dark") :
    localStorage.setItem("data-theme", localStorage.getItem("data-theme"));

    if(localStorage.getItem("data-theme")=== "dark"){
        modebtn.innerHTML='<i class="fa-regular fa-moon"></i>'
    } else{
        modebtn.innerHTML='<i class="fa-regular fa-sun"></i>'
    }


    modefunc(document.body)
    modefunc(modebtn);
    modefunc(header);

    const currenthash = window.location.hash;
    const activeLink = document.querySelector('header a[href="${currenthash}"]')
    activeLink ? activeLink.classList.add("") : null ;
})

function modefunc(element){
    if(localStorage.getItem("data-theme") === "dark"){
        element.classList.add("dark");
        element.classList.remove("light");
    }else{
        element.classList.add("light");
        element.classList.remove("dark");
    }


}


headerAnchors.forEach((anchor) => {
    anchor.addEventListener("click",function(){
        headerAnchors.forEach((a) => a.classList.remove("active"));
        header.classList.remove("open");

        this.classList.add("active") 
    });
}); 
