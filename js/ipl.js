
const base_url = "https://indipl2020.herokuapp.com/ipl2020/team/"
const token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE1OTAwNTU1NTksImlhdCI6MTU5MDAzNzU1OX0.fLmUQjxR9fxlS51HXElMGWg645XDwbx_pcES3MqdzFKvH96qZ5DrC2oxG-AsKwBMh4ZRvYPkQQiYu-liKvd3VQ";

let labels = [];

let response = function(url){
    return fetch(url, {
        headers: {
            "Authorization": token
        }
    });
} 


getTeamData = function(){
   teamLabel = document.querySelector("#idLabel").value;
   const url = `${base_url}${teamLabel}`;
   response(url).then(res=>res.json()).then(data=>{
       alert("Team :"+teamLabel+"<br>"+data);
  });
}

getTeamLabels = function(){
    const url = `${base_url}labels`
    response(url).then(res=>res.json()).then(data=>{
        labels = data["labels"];
        selectId = document.querySelector("#selectId");
        var str = "<select id='idLabel' class='form-control' onChange=getTeamData()>"
        labels.forEach(element => {
                str+=`<option>${element}</option>`
        });
        str+="</select>";
        selectId.innerHTML = str;
    }).catch(err=>{
        console.log(err);
    })
}

getTeamLabels();