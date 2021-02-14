function message(){

	let p = "Feliz San Valentín, te amo Shei❤️ ", i=0
	
	setInterval(function(){
		let msg = document.querySelector("#text")
		var text = document.createTextNode(p[i++])
	
		if(i<=p.length){
			msg.appendChild(text)
			}
		}, 70)
}


window.addEventListener("load",message,false)

