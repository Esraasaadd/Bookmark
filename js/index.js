var siteNameInput=document.getElementById("siteName");
var siteUrlInput=document.getElementById("siteUrl");
var listBody=document.getElementById("listBody");

var siteList=[];

if(localStorage.getItem("sites")==null)
    {
        siteList=[];
    }
    else
    {
        siteList=JSON.parse(localStorage.getItem("sites"));
        display(siteList);
    }

function addSite(){
    if(siteNameInput.classList.contains("is-valid")){
        var site={
            siteName:siteNameInput.value,
            siteUrl:siteUrlInput.value
        }
    
        siteList.push(site);
        localStorage.setItem("sites",JSON.stringify(siteList))
        display(siteList);
        clearForm()    
    }
    else{
        alert("data is invalid")
    }
}

function display(arr){
    var cartona ="";
    for (var i = 0; i < arr.length; i++) {
        cartona+=`
        <tr>
        <th>${i+1}</th>
        <th>${arr[i].siteName}</th>
        <th><button onclick="visit(${i})" class="btn btn-visit px-4"><i class="fa-solid fa-eye pe-2"></i>visit</button></th>
        <th><button onclick="deleteSite(${i})" class="btn btn-danger px-4"><i class="fa-solid fa-trash-can"></i>Delete</button></th>
        </tr>    `
    }
    listBody.innerHTML=cartona;
}

function clearForm(){
    siteNameInput.value=null;
    siteUrlInput.value=null;
}

function deleteSite(index){
    siteList.splice(index,1);
    localStorage.setItem("sites",JSON.stringify(siteList))
    display(siteList);
}

function visit(index){
    open(siteList[index].siteUrl);
}

//validation
function validateInputs(element){
    var regex={
        siteName:/^[A-Z]{3,}$/i,
        siteUrl: /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?$/
        //esraa@gmail.com
    }
    if(regex[element.id].test(element.value)){
        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
    }
    else{
        element.classList.add("is-invalid")
        element.classList.remove("is-valid")
    }
}

//try in the website this data >>
//site name>>any name you want 
// Site URL>>https://gutenberg.org