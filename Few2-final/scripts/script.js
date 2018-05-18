/*eslint-env browser*/
var $ = function (id) {
	"use strict";
    return window.document.getElementById(id);
};

/*PART 1*/
function checkOptions(val) {
	"use strict";
	if (val === "Other") {
		$("address").style.display = "block";
	} else {
		$("address").style.display = "none";
	}
}
var customerName = function validName() {
	"use strict";
    var regex = /^[a-z A-Z]{2,30}$/;
	
	if (regex.test($("name").value) && $("name").value !== " ") {
		return ($("name").style.border = "2px solid green");
       
    } else {
	return ($("name").style.border = "2px solid red");
	
	}
};
var address = function validAddress(val) {
	"use strict";
	var result;
	if (val !== " ") {
		result = ($("addressType").style.border = "2px solid green");
		return result;
	} else {
		result = ($("addressType").style.border = "4px solid red");
		return result;
	}
};
var street = function validStreet() {
	"use strict";
	var result;
	if ($("streetAddress").value !== "") {
		result = ($("streetAddress").style.border = "2px solid green");
        return result;
    } else {
		result = ($("streetAddress").style.border = "4px solid red");
	return result;
	}
};
var apartment = function validApartment() {
    "use strict";
	var result;
    if ($("apartmentNumber").value !== "") {
       result = ($("apartmentNumber").style.border = "2px solid green");
        return result;
    } else {
		result = ($("apartmentNumber").style.border = "4px solid red");
	return result;
	}
};
var city = function validCity() {
	"use strict";
    var cityRegex = /^[a-z A-Z]{2,50}$/, result;
	
	if (cityRegex.test($("city").value) && $("city").value !== " ") {
		result = ($("city").style.border = "2px solid green");
        return result;
    } else {
		result = ($("city").style.border = "4px solid red");
	return result;
	}
};
var state = function validState() {
	"use strict";
    var stateRegex = /^(AK|AL|AR|AZ|CA|CO|CT|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|MA|MD|ME|MI|MN|MO|MS|MT|NB|NC|ND|NH|NJ|NM|NV|NY|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VA|VT|WA|WI|WV|WY)$/i, result;
	
	if (stateRegex.test($("state").value) && $("state").value !== "") {
		result = ($("state").style.border = "2px solid green");
        return result;
    } else {
		result = ($("state").style.border = "4px solid red");
	return result;
	}
};
var zip = function validZip() {
	"use strict";
	var zipRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/, zipResult;
	if (zipRegex.test($("zipCode").value) && $("zipCode").value !== "") {
	zipResult = ($("zipCode").style.border = "2px solid green");
		return zipResult;
	} else {
		zipResult = ($("zipCode").style.border = "4px solid red");
		return zipResult;
	}
};
var phone = function validPhone() {
	"use strict";
	var phoneRegex = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/, phoneResult;
	if (phoneRegex.test($("phoneNumber").value) && $("phoneNumber").value !== "") {
	phoneResult = ($("phoneNumber").style.border = "2px solid green");
		return phoneResult;
	} else {
		phoneResult = ($("phoneNumber").style.border = "4px solid red");
		return phoneResult;
	}
};
var email = function validEmail() {
	"use strict";
	var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, emailResult;
	if (emailRegex.test($("email").value) && $("email").value !== "") {
	emailResult = ($("email").style.border = "2px solid green");
		return emailResult;
	} else {
		emailResult = ($("email").style.border = "4px solid red");
		return emailResult;
	}
};

/*PART 2*/
function totalValue() {
	"use strict";
	var total = 0, crustCost, cheeseCost, sauceCost;
	crustCost = parseFloat($("sizeCost").value);
	cheeseCost = parseFloat($("cheeseOptions").value);
	sauceCost = parseFloat($("sauceOptions").value);
	
	if ($("handTossed").checked || $("thinCrust").checked || $("newYorkStyle").checked || $("glutenFree").checked) {
		total = (crustCost + cheeseCost + sauceCost);
		if ($("peppers").checked) {
			total = total + 0.99;
		}
		if ($("olives").checked) {
			total = total + 0.99;
		}
		if ($("jalapenos").checked) {
			total = total + 0.99;
		}
		if ($("mushrooms").checked) {
			total = total + 0.99;
		}
		if ($("pineapple").checked) {
			total = total + 0.99;
		}
		if ($("onion").checked) {
			total = total + 0.99;
		}
		if ($("pepperoni").checked) {
			total = total + 0.99;
		}
		if ($("sausage").checked) {
			total = total + 0.99;
		}
		if ($("ham").checked) {
			total = total + 0.99;
		}
		if ($("bacon").checked) {
			total = total + 0.99;
		}
		if ($("salami").checked) {
			total = total + 0.99;
		}
	} else {
		$("peppers").checked = false;
		$("olives").checked = false;
		$("jalapenos").checked = false;
		$("mushrooms").checked = false;
		$("pineapple").checked = false;
		$("onion").checked = false;
		$("pepperoni").checked = false;
		$("sausage").checked = false;
		$("ham").checked = false;
		$("bacon").checked = false;
		$("salami").checked = false;
		window.alert("please selecte pizza crust first");
	}
	
	$("totalPrice").value = total.toPrecision(4)//Number((total).toFixed(2));
	
}
/*part 3*/
/*billing*/
var nameB = function validNameD() {
	"use strict";
    var regex = /^[a-z A-Z]{2,30}$/, result;
	
	if (regex.test($("name1").value) && $("name1").value !== "") {
		result = ($("name1").style.border = "2px solid green");
        return result;
    } else {
		result = ($("name1").style.border = "2px solid red");
	return result;
	}
};

function checkOptions1(val) {
	"use strict";
	if (val === "Other") {
		$("address1").style.display = "block";
	} else {
		$("address1").style.display = "none";
	}
}

var addressB = function validAddress(val) {
	"use strict";
	var result;
	if (val !== " ") {
		result = ($("addressType1").style.border = "2px solid green");
		return result;
	} else {
		result = ($("addressType1").style.border = "4px solid red");
		return result;
	}
};

var streetB = function validStreet() {
	"use strict";
	var result;
	if ($("streetAddress1").value !== "") {
		result = ($("streetAddress1").style.border = "2px solid green");
        return result;
    } else {
		result = ($("streetAddress1").style.border = "4px solid red");
	return result;
	}
};

var apartmentB = function validApartment() {
    "use strict";
	var result;
    if ($("apartmentNumber1").value !== "") {
       result = ($("apartmentNumber1").style.border = "2px solid green");
        return result;
    } else {
		result = ($("apartmentNumber1").style.border = "4px solid red");
	return result;
	}
};
var cityB = function validCity() {
	"use strict";
    var cityRegex = /^[a-z A-Z]{2,50}$/, result;
	
	if (cityRegex.test($("city1").value) && $("city1").value !== " ") {
		result = ($("city1").style.border = "2px solid green");
        return result;
    } else {
		result = ($("city1").style.border = "4px solid red");
	return result;
	}
};

var stateB = function validState() {
	"use strict";
    var stateRegex = /^(AK|AL|AR|AZ|CA|CO|CT|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|MA|MD|ME|MI|MN|MO|MS|MT|NB|NC|ND|NH|NJ|NM|NV|NY|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VA|VT|WA|WI|WV|WY)$/i, result;
	
	if (stateRegex.test($("state1").value) && $("state1").value !== "") {
		result = ($("state1").style.border = "2px solid green");
        return result;
    } else {
		result = ($("state1").style.border = "4px solid red");
	return result;
	}
};

var zipB = function validZip() {
	"use strict";
	var zipRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/, zipResult;
	if (zipRegex.test($("zipCode1").value) && $("zipCode1").value !== "") {
	zipResult = ($("zipCode1").style.border = "2px solid green");
		return zipResult;
	} else {
		zipResult = ($("zipCode1").style.border = "4px solid red");
		return zipResult;
	}
};
var phoneB = function validPhone() {
	"use strict";
	var phoneRegex = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/, phoneResult;
	if (phoneRegex.test($("phoneNumber1").value) && $("phoneNumber1").value !== "") {
	phoneResult = ($("phoneNumber1").style.border = "2px solid green");
		return phoneResult;
	} else {
		phoneResult = ($("phoneNumber1").style.border = "4px solid red");
		return phoneResult;
	}
};
var emailB= function validEmail() {
	"use strict";
	var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, emailResult;
	if (emailRegex.test($("email1").value) && $("email1").value !== "") {
	emailResult = ($("email1").style.border = "2px solid green");
		return emailResult;
	} else {
		emailResult = ($("email1").style.border = "4px solid red");
		return emailResult;
	}
};



function checkBox() {
    "use strict";    
    $("name1").value = $("name").value;    
    $("addressType1").value = $("addressType").value;
    $("address1").value = $("address").value;
    $("streetAddress1").value = $("streetAddress").value;
    $("apartmentNumber1").value = $("apartmentNumber").value;
    $("city1").value = $("city").value;
    $("state1").value = $("state").value;
    $("zipCode1").value = $("zipCode").value;
    $("phoneNumber1").value = $("phoneNumber").value;
    $("email1").value = $("email").value;
        
}


window.addEventListener("load", function () {
	"use strict";
	/*Delivery Location inputs checking*/
	$("name").addEventListener("input", customerName);
	$("addressType").addEventListener("input", address);
	$("streetAddress").addEventListener("input", street);
	$("apartmentNumber").addEventListener("input", apartment);
	$("city").addEventListener("input", city);
	$("state").addEventListener("input", state);
	$("zipCode").addEventListener("input", zip);
	$("phoneNumber").addEventListener("input", phone);
	$("email").addEventListener("input", email);
	
	/*part2*/
	var doughSizePrize = {
                         handTossed: [{size: "Small", price: "$9.99"},
                                     {size: "Medium", price: "$12.99"},
                                     {size: "Large", price: "$14.99"}
                         ],
                         thinCrust: [{size: "Medium", price: "$11.99"},
                                     {size: "Large", price: "$13.99"}
                         ],
                         newYorkStyle: [{size: "Large", price: "$16.99"},
                                     {size: "Extra Large", price: "$19.99"}],
                         glutenFree: [{size: "Small", price: "$10.99"}]
	};
     
    var optdoughlist =  document.getElementsByName('optdough');
    var optdoughItems = [].slice.call(optdoughlist);
	optdoughItems.forEach(function (item) {
        item.addEventListener('change', function() {
			var selectedDough, i, el;
			selectedDough = doughSizePrize[item.id];
			$('sizeCost').innerHTML = null;
        for (i = 0; i < selectedDough.length; i += 1) {
            el = document.createElement("option");
            el.textContent = selectedDough[i].size +  " (" + selectedDough[i].price + ")";
            el.value = selectedDough[i].price.substr(1);
			$('sizeCost').appendChild(el);
		}        
     });
    });
	
	$("sizeCost").addEventListener("change", totalValue);
	$("cheeseOptions").addEventListener("change", totalValue);
	$("sauceOptions").addEventListener("change", totalValue);
	$("sauceOptions").addEventListener("change", totalValue);
	$("toppings").addEventListener("change", totalValue);
	$("bulidPizza").addEventListener("click", function () {
		
		$("total").style.display = "block";
		totalValue();			
});
	
$("conformation").addEventListener("click", function (e) {    
	if (($("name").value !== "") && ($("addressType").value !== "") && ($("streetAddress").value !== "") && ($("city").value !== "") && ($("state").value !== "") && ($("zipCode").value !== "") && ($("phoneNumber").value !== "") && ($("email").value !== "")) { e.preventDefault();
    if($("handTossed").checked || $("thinCrust").checked || $("newYorkStyle").checked || $("glutenFree").checked) {
        if (($("totalPrice").value === "0.000") ){
            e.preventDefault();
            window.alert("Please select pizza size and cost");
        } else{
             e.preventDefault();
	if (window.confirm("Do you really want to leave?")) {
        e.preventDefault();
		$("billing").style.display = "block";
	} else {
		e.preventDefault();
	}
	} 
    }else {
        e.preventDefault();
		window.alert("Please bulid your pizza");
	} 
    } else {
        window.alert("Please fill delivery location form first");
    }
});
    /* PART-3*/
	$("name1").addEventListener("input", nameB);
    $("addressType1").addEventListener("input", addressB);
    $("streetAddress1").addEventListener("input", streetB);
    $("apartmentNumber1").addEventListener("input", apartmentB);
    $("city1").addEventListener("input", cityB);
    $("state1").addEventListener("input", stateB);
    $("zipCode1").addEventListener("input", zipB);
    $("phoneNumber1").addEventListener("input", phoneB);
    $("email1").addEventListener("input", emailB)
     $("handTossed").addEventListener("change", function () {       
         if($("handTossed").checked) {
             $("totalPrice").value = "9.99";
         }
     });
     $("thinCrust").addEventListener("change", function () {       
         if($("thinCrust").checked) {
             $("totalPrice").value = "11.99";
         }
     });
    $("newYorkStyle").addEventListener("change", function () {       
         if($("newYorkStyle").checked) {
             $("totalPrice").value = "16.99";
         }
    });
    $("glutenFree").addEventListener("change", function () {       
         if($("glutenFree").checked) {
             $("totalPrice").value = "10.99";
         }    
        
     });
   
    $("checkbox1").addEventListener("change", checkBox);
    $("name1").addEventListener("onchange", nameB);
});