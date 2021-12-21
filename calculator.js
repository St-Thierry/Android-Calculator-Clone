/*var view = {//implementing the view portion of the MVC model
	printNumber: function(para, arg){
		para+=arg.id;//accessing the array-like object(HTML Collection) of number
		printOutput(para);
	}
}*/
/*function check(){
	dib = retrieveOutput();
	if 
}*/

var number = document.getElementsByClassName('number');
	for(var i =0;i<number.length;i++){
		number[i].addEventListener('click',  function(){//used the arrow notation here before. Didn't work.. wasted my time for hours
			//console.log(number[i].id);
			let output=retrieveOutput();
			if (output === "Bad Expression"){
				printOutput("");
				mid = retrieveOutput();//get new output i.e empty space
				mid+=this.id;//accessing the array-like object(HTML Collection) of number
				printOutput(mid);
			}
			else {
				output+=this.id;//accessing the array-like object(HTML Collection) of number
				printOutput(output);

				//let inter = ['x','/','-','+'];inter[prop]!== inter[prop])
				//for (let prop of inter){
					if (output.indexOf("/") >= 0) {
						if (output.charAt(san-1) === 0)
						printResult(output);}
				//}			
			}
		})
	}

var operator = document.getElementsByClassName('operator');
	for (var i =0;i<operator.length;i++){
	console.log(operator[i].innerText);
	operator[i].addEventListener('click',  function(){
		let mid = retrieveOutput();
		san = mid.length;
		if (this.id === "backspace"){
			if (mid === "Bad Expression") printOutput("");
			else
				{	
					printOutput(mid.substring(0,mid.length-1));
				}
			}

		if (this.id === "plus" || this.id === "multiplication" || this.id === "division"){
			
			if (mid === ""){ 
				printOutput("");
			} else if(mid.charAt(san-1) === this.innerText) {//if the last character is a minus, do not print a minus again if the user clicks on one 
					printOutput(mid);
			} else {
					mid+=this.innerText;
					printOutput(mid);
			}
			//printResult();
	}

		if (this.id === "equal") {

			if (mid.charAt(san-1) === '/' || 'x' || '+' || '-') printResult("Bad Expression");
			//printResult(mid.charAt(san-1));
			else if (mid.charAt(san-1) === '0' || '1' || '2' || '3') printResult("Good Expression");
		}
						
		if (this.id === "minus") {//when the minus operator is clicked 

			get = mid.length;
			if  (mid.charAt(get-1) === this.innerText) {//if the last character is a minus, do not print a minus again if the user clicks on one 
				printOutput(mid);
			}

			else {//else append minus to the current output
				mid+="-";
				printOutput(mid);
				} 
			}	

		})	
	};

function printOutput(num){
		const msg = document.getElementById('out');
		msg.innerText = num;
}	

function retrieveOutput(){//this functionality returns the already present text content of the output section for later use
	return document.getElementById('out').textContent;
}

function printResult(num){//display content in the result area
		init = retrieveOutput();
		const msg = document.getElementById('result');
		msg.innerText = num;
}

//const msg = document.queryselector('#input p'); Apparently this only manipulates css selectors*/ 
//printOutput(8 + retrieveOutput());
//printOutput("45556");


/*const str = "manipulation";
	  sub = str.substring(0,str.length-5);
	  console.log(str[0]);
	  console.log(str.[length-1]);*/

const str = "m0n1p2l3t4on";
for (i=0; i<str.length; i++){
	if (str[i] != NaN) {
	console.log("index");
	console.log(str.indexOf(9));
	}

	
}