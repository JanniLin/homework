var UAperKw = 1.68;                                                                 //price per 1 kW
debugger
do{                                                                                 //start of cicle
var CurrentMeterReading = prompt("Write down current meter reading");               //ask user to write down current meter reading
var PreviousMeterReading = prompt("Write down previous meter reading");             //ask user to write down previous meter reading
var AmountKw = (+CurrentMeterReading) - (+PreviousMeterReading);                    //kW calculating
var TotalPrice = AmountKw * UAperKw;                                                //price calculating 
alert( "Total price " + TotalPrice + " UAH.");                                      //show the price to user
}while (AmountKw > 0)                                                               //end of cicle end conditions