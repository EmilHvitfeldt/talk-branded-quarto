const textArr = document.querySelectorAll('.text')
const colorArr = ["#fefefe", "#ffea00", "#ffa200", "#ff4938", "#f00064", "#a80089", "#0000a3"]
textArr.forEach((text, index) => {
	text.style.color = colorArr[index]
})
