<script type="text/javascript">
'use estrict'
const file= 'universidadesEdoMex.json';
const request = new XMLHttpRequest();
request.overrrideMimeType("application/json");
request.open("GET", file, true);
request.onload= function buscotuEscuela() {
const dato = JSON.parse(this.responseText);
let tuEscuela = getElementById("escuela").value;
let patron = /\w/gi;
let escuela=tuEscuela.match(patron);
let escuelas= dato.match(patron);
 while(escuela===)
for (let i = 0; i < array.length; i++) {
i  const element = array[i];
    
}

} 

</script>