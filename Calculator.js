var calcStr = "";
var clickArr = []; //collects the clicks
var clickStr; //combines the clicks on math funciton click
var calcArr = []; // pushes combined clicks and functions
var sum;


function inputDisplay(){
	$(".numbtn").click(function(){		
		inputHtml = parseInt(($(this).children("p").html()));
		$(".input").append(inputHtml);//push click value into input field.
		clickArr.push(inputHtml);//push click value into clickArr.
		clickStr = clickArr.join("");
		
	});
}

function funcClick(){
	$(".maths").click(function(){
		switch ($(this).attr("id")){
			case "plus":
			$(".input").append(" + ");
			clickArr.push("+");
			break;
			case "minus": 
			$(".input").append(" - ");
			clickArr.push("-");
			break;
			case "multiply":
			$(".input").append(" * ");
			clickArr.push("*");
			break;
			case "divide":
			$(".input").append(" &divide; ");
			clickArr.push("/");
			break;
			case "posNeg":
			if (clickArr.indexOf("-") < 0){
				clickArr.unshift("-");
				$(".input").empty();
				$(".input").html("-" + clickStr);
				console.log(clickArr);
			}
			else if (clickArr.indexOf("-") == 0){
				clickArr.shift("-");;
				$(".input").empty();
				$(".input").html(clickArr.join(""));
			}			
			break;
			case "squareRoot":
			
			$(".input").html("&radic;" + sum);
			sum = Math.sqrt(sum);
			sum = +sum.toFixed(4);
			$(".output").empty();
			$(".output").html(sum);
			break;
			case "decimal":
			$(".input").append(".");
			clickArr.push(".");
			break;
		}

		clickStr = clickArr.join("");
				
	});
}

function equalsClick(){
	$("#equals").click(function(){
		console.log(clickStr);
		sum = eval(clickStr);
		sum = +sum.toFixed(4);
		$(".output").html(sum);
	})
}



function clearClick(){
	$("#clearBtn").click(function(){
		$(".input").empty();
		$(".output").empty();
		$(".output").html("0");
		inputArr = [];
		funcArr = [];
		numArr = [];
		clickArr = [];
		sum = 0;
	});
}

function turnOn(){
	$("#on").click(function(){
		inputArr = [];
		funcArr = [];
		numArr = [];
		clickArr = [];
		sum = 0;
		$(".input").empty();
		$(".output").empty();
		$(".output").html("0");
	})
}

$(document).ready(function(){
	inputDisplay();
	clearClick();
	turnOn();
	funcClick();
	equalsClick();
});