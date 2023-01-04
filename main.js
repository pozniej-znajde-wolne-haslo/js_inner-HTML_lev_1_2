let div_info = document.getElementById('info');
div_info.innerHTML += '<h1>Hello World!</h1>';
console.log(div_info);
div_info.innerHTML += '<h2>How are you?</h2>';

let div_container = document.getElementById('container');
div_container.innerHTML += '<p>start of the element</p>';
console.log(div_container);


// Mit document.write() fügt man immer am Ende des HTML Dokuments die Inhalte hinzu

document.write("end of the element")

/* ===== SEITEN zum Thema ===== 

https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

https://www.w3schools.com/jsref/prop_html_innerhtml.asp

*/


