var ano = new Date().getFullYear();

for (let i = ano; i >= 1500; i--){
    document.getElementById('ano').innerHTML += "<option value='"+i+"'>"+i+"</option>";
}








