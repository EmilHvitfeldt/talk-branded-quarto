const textArr = document.querySelectorAll('.text')
const colorArr = ["#fefefe", "#ff9b00", "#ff3434", "#db38f0", "#0096fb", "#00c500", "#ffd200"]
textArr.forEach((text, index) => {
	text.style.color = colorArr[index]
})