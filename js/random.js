function RandomTable(){
	this.idName = "random-table";
	this.quantity = 10;
	this.getTable = function (){
		var table = document.getElementById(this.idName);
		if (table) {
			return table;
		}
		else{
			throw "The element with id "+this.idName+" was not found!";
			return false;
		}
	};
	this.getQuantity = function(){
		this.quantityId = "random-quantity";
		var input = document.getElementById(this.quantityId);
		if (input) {
			return parseInt(input.value);
		}
		else {
			return 0 ;
		}
	};
	this.getRangeBegin = function(){
		this.rangeBeginId = "random-range-begin";
		var input = document.getElementById(this.rangeBeginId);
		if (input) {
			return parseInt(input.value);
		}
		else {
			return 0 ;
		}
	};
	this.getRangeEnd = function(){
		this.rangeEndId = "random-range-end";
		var input = document.getElementById(this.rangeEndId);
		if (input) {
			return parseInt(input.value);
		}
		else {
			return 0 ;
		}
	};
	function randomInt (min, max){
		var rd = Math.random();
		var nmbr = min*rd + (1-rd)*(max+1);
		return Math.floor(nmbr)
	};
	this.clearTable = function(){
		this.getTable().innerHTML = "";
	};
	this.print = function(){
		window.print();
	};
	this.randomColor = function(number, range){
		var maincolor = 120;
		var transformedNumber = 100/(range.max - range.min)*(number-range.min);
		return "hsl("+maincolor.toString()+", 100%,"+transformedNumber.toString()+"%)";
	};
	this.deploy = function(){
		console.log("Deploying...");
		var table = this.getTable();
		if (!table) {return -1};
		var quantity = this.getQuantity();
		var range = {"min": this.getRangeBegin(), "max": this.getRangeEnd()};
		console.log(range);
		var numbers = [];
		for (var i = 0; i < quantity; i++) {
			var rint = randomInt(range.min, range.max);
			numbers.push(rint);
			console.log(rint);
		};
		this.clearTable();
		for (var i = 0; i < numbers.length; i++) {
			table.innerHTML += "<div class='col-xs-3 col-sm-1 random-number' style='background-color: "+this.randomColor(numbers[i], range)+"'><span> "+numbers[i].toString()+" </span></div>";
			console.log("hi"+i,table.innerHTML);
			
		};

	}
}

var HM3RandomTable = new RandomTable();
