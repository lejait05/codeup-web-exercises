console.log("Hello from external JavaScript!");
alert("Welcome to my Website!");
//var userInput = prompt('What is your favorite color?:');
//alert('Great I also like the color '  +  userInput);

var daysRentedLittleMermaid = parseFloat(prompt('How many days did you rent the Little Mermaid?'));
var daysRentedBrotherBear = parseFloat(prompt('How many days did you rent Brother Bear?'));
var daysRentedHercules = parseFloat(prompt('How many days did you rent Hercules?'));
var movieRentalCostPerDayDollars = parseFloat(prompt('How much is the rental rate per day?'));

var totalPrice = (daysRentedLittleMermaid + daysRentedBrotherBear + daysRentedHercules) * movieRentalCostPerDayDollars;

alert('Total rental price will be $' + totalPrice.toFixed(2));

var googleHourlyRateDollars = parseFloat(prompt('What is your hourly rate at Google?'));
var amazonHourlyRateDollars = parseFloat(prompt('What is your hourly rate at Amazon?'));
var facebookHourlyRateDollars = parseFloat(prompt('What is your hourly rate at Facebook?'));

var googleHours = parseFloat(prompt('How many hours did you work at Google this week?'));
var amazonHours = parseFloat(prompt('How many hours did you work at Amazon this week?'));
var facebookHours = parseFloat(prompt('How many hours did you work at Facebook this week?'));

var totalPaymentDollars = (googleHourlyRateDollars * googleHours) + (amazonHourlyRateDollars * amazonHours) + (facebookHourlyRateDollars * facebookHours);

alert('Total payment will be $' + totalPaymentDollars.toFixed(2))


