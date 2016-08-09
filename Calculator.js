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
		console.log(clickStr);
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
			sum *= -1;
			$(".output").empty();
			$(".output").html(sum);
			break;
			case "squareRoot":
			sum = Math.sqrt(sum);
			sum = +sum.toFixed(4);
			$(".output").empty();
			$(".output").html(sum);
			break;
		}

		clickStr = clickArr.join("");
				
	});
}

function equalsClick(){
	$("#equals").click(function(){
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