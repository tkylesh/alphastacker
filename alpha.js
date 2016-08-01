/*Javascript for alphastacker application NSS*/

var al = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var stack = [];

var el = document.getElementById("alpha");

var spaceOff = 0;

for (var i = 0; i < 26; i++) {
	stack.push(al.shift());

	if ((stack.length + 1)%5 === 0)
	{
		stack.push(" ");
	}
	console.log(stack);
	el.innerHTML += "<li>"+stack+"</li>";

}

