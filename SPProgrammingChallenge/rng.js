function flip() {
  return Math.random() >= 0.5;
}

function randomNumber(n) {
	/* I generate a binary number of the lenght of digits needed to represent "n", with the "flip" function,
	   then a substraction and get the final number:
	   1. Take the LOG base 2 of the number entered by the user,
	      so I can know how many bits I need to generate a number in that range.
	   2. "Flip" that number of times and generate a binary number.
	   3. Convert that binary number into decimal.
	   4. Substract that number from n and take the absolute value.
	   5. Return the random number generated.
	*/

	if (n > 1000000){
		throw "Initial number cannot be greater than 1'000,000";
	}
	
	var flips = flips = Math.round(Math.log2(n));
	var i = 0;
	var bits = "";
	var digit = false;

	if (n==0) {
		console.log("There are no random numbers to generate, since your initial value was 0");
		process.exit();
	}

	if (n == 1){
		console.log("Your not that random number is 0");
		process.exit();
	}
	
	for (i = 0; i < flips; i++){
		digit = flip()
		if (digit == true) {
			bits += 1;
		} else {
			bits += 0;
		}
	}

	var dec = parseInt(bits,2);
	var rn = Math.abs(n-dec);
	console.log("Your random number is: " + rn);

}

//Test cases
try{
	randomNumber(1000001);
}catch (e){
	console.log(e);
}
try{
	randomNumber(1000000);
}catch (e){
	console.log(e);
}
try{
	randomNumber(1);
}catch (e){
	console.log(e);
}
