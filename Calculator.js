
var inputArr = [];
var clickArr = [];// array of buttons being clicked initially
var funcArr = [];// array joining button clicks
var numArr = [];
var inputHtml = 0;
var sum = 0;


function inputDisplay(){
	$(".numbtn").click(function(){		
		inputHtml = parseInt(($(this).children("p").html()));
		$(".input").append(inputHtml);//push click value into input field.
		clickArr.push(inputHtml);//push click value into clickArr.
		
	});
}


 //each click needs to be pushed into an array, then joined into a number when function button is clicked.
function plusClick(){
	$("#plus").click(function(){
			funcArr.push(Number(clickArr.join(""))); // on plus click push whole clickArr into funcArr
			clickArr = [];//reset the click array

		$(".input").append(" + ");//show plus symbol on input field
	})
}

function equalClick(){
	$("#equals").click(function(){
		funcArr.push(Number(clickArr.join("")));//pushes new clicks into final ready to compute funcArr
		for (var i = 0; i < funcArr.length; i++){
				sum += funcArr[i];
				$(".output").html(sum);//make the output the added values.
			}
		}
	)}


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
	plusClick();
	equalClick();
});