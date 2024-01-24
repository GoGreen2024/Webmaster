//navbar shadow
document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
          navbar.classList.add("shadow");
      } else {
          navbar.classList.remove("shadow");
      }
  });
});



//tablinks
function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color and activeTab class of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].classList.remove("activeTab");
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color and activeTab class to the button used to open the tab content
  elmnt.style.backgroundColor = color;
  elmnt.classList.add("activeTab");
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



var slideIndex = 1;
var direction = 1; // 1 for "next," -1 for "prev"
showSlides(slideIndex);

function plusSlides(n) {
  direction = n > 0 ? -1 : 1; // Set direction based on whether "next" or "prev" is clicked
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var numberIndicator = document.getElementsByClassName("numbertext")[0];

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0; // Set opacity to 0 initially
    slides[i].style.transform = `translateX(${direction * 10}%)`; // Move in from left or right based on direction
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].offsetWidth; // Trigger reflow
  slides[slideIndex - 1].style.transition = "opacity 0.8s ease-in-out, transform 0.8s ease-in-out"; // Transition for opacity and movement
  slides[slideIndex - 1].style.opacity = 1; // Fade in
  slides[slideIndex - 1].style.transform = "translateX(0)"; // Move in

// Update number indicator
numberIndicator.innerHTML = slideIndex + " / " + slides.length;
}








      
 
function calculateEmissions() {
  // Get user input
  var electricityUsage = parseFloat(document.getElementById("electricity").value);
  var petrolUsage = parseFloat(document.getElementById("petrol").value);
  var dieselUsage = parseFloat(document.getElementById("diesel").value);
  var lpgUsage = parseFloat(document.getElementById("lpg").value);

  // Validate input
  if (isNaN(electricityUsage) || isNaN(petrolUsage) || isNaN(dieselUsage) || isNaN(lpgUsage)) {
      alert("Please enter valid numerical values for all fields.");
      return;
  }

  // Emission factors
  var electricityFactor = 0.85;
  var petrolFactor = 2.296;
  var dieselFactor = 2.653;
  var lpgFactor = 2.983;

  // Calculate emissions
  var electricityEmission = electricityUsage * electricityFactor;
  var petrolEmission = petrolUsage * petrolFactor;
  var dieselEmission = dieselUsage * dieselFactor;
  var lpgEmission = lpgUsage * lpgFactor;

  // Calculate total carbon footprint
  var totalEmission = electricityEmission + petrolEmission + dieselEmission + lpgEmission;

  // Convert total emission to tons
  var totalEmissionTon = totalEmission / 1000;

  // Calculate number of tree seedlings needed
  var carbonAbsorptionPerTreeYear = 22; // Average carbon absorption in kg per tree per year
  var numberOfTreesNeeded = totalEmission / carbonAbsorptionPerTreeYear;

  // Display results
  document.getElementById("electricityResult").innerText = "Electricity: " + electricityEmission.toFixed(2) + " Kg CO2";
  document.getElementById("petrolResult").innerText = "Petrol: " + petrolEmission.toFixed(2) + " Kg CO2";
  document.getElementById("dieselResult").innerText = "Diesel: " + dieselEmission.toFixed(2) + " Kg CO2";
  document.getElementById("lpgResult").innerText = "LPG: " + lpgEmission.toFixed(2) + " Kg CO2";
  document.getElementById("totalResult").innerText = "Your Carbon Footprint: " + totalEmission.toFixed(2) + " Kg CO2\n\nTotal Carbon Footprint in tons: " + totalEmissionTon.toFixed(2) + " tCO2";
  document.getElementById("treeResult").innerText = "It would take " + Math.round(numberOfTreesNeeded) + " tree seedlings grown for 10 years or 0 acres of forests in one year to offset those CO2 emissions";
 
  // Show the results section
  document.getElementById("results").style.display = "block";

  document.getElementById("results").scrollIntoView({ behavior: 'smooth' });
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var allpanel = this.nextElementSibling;
    if (apanel.style.maxHeight) {
      apanel.style.maxHeight = null;
    } else {
      apanel.style.maxHeight = apanel.scrollHeight + "px";
    } 
  });
}

function newDoc() {
  window.location.assign("https://usepa.servicenowservices.com/ecss?id=ecss_csm_get_help_1&sys_id=d696a9f51ba9581013bdb913cc4bcbbe")
}

let answers=document.querySelectorAll(".accordionn");
        answers.forEach((event)=>{
            event.addEventListener('click',()=>{
                if(event.classList.contains("active")){
                    event.classList.remove("active");
                }
                else{
                    event.classList.add("active");
                }
            })
        })
// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Fade in elements on scroll
  document.addEventListener('scroll', function() {
      const elements = document.querySelectorAll('.fade-in-element');

      elements.forEach(function(element) {
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (elementPosition < windowHeight * 0.8) {
              element.style.opacity = 1;
          } else {
              element.style.opacity = 0;
          }
      });
  });

  // Smooth scroll to section when clicking on a link
  const links = document.querySelectorAll('.scroll-link');

  links.forEach(function(link) {
      link.addEventListener('click', function(e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          window.scroll({
              top: targetElement.offsetTop,
              behavior: 'smooth'
          });
      });
  });
});

function scrollToTop() {
  window.scrollTo(0, 0);
}

// Add an event listener to each tab link
document.querySelectorAll('.tablink').forEach(tablink => {
  tablink.addEventListener('click', scrollToTop);
});

function calculateSavings() {
  const electricityBillInput = document.getElementById('electricityBill');
  const resultContainer = document.getElementById('result');

  const electricityBill = parseFloat(electricityBillInput.value.trim());

  if (isNaN(electricityBill) || electricityBill <= 0) {
    resultContainer.innerHTML = '<p>Please enter a valid positive number for your monthly electricity bill.</p>';
    return;
  }

  // Assuming solar panels cover the entire electricity bill
  const yearlySavings = electricityBill * 12;

  resultContainer.innerHTML = `<p>Your potential yearly savings with solar panels: $${yearlySavings.toFixed(2)}</p>`;
}

function calculateWindSpeed() {
  const beaufortScaleInput = document.getElementById('beaufortScale');
  const resultContainer = document.getElementById('rresult');

  const beaufortScale = parseInt(beaufortScaleInput.value.trim());

  if (isNaN(beaufortScale) || beaufortScale < 0) {
    resultContainer.innerHTML = '<p>Please enter a valid non-negative Beaufort Scale value.</p>';
    return;
  }

  // Beaufort scale values and corresponding wind speeds
  const beaufortValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const windSpeeds = [0, 1, 4, 7, 11, 16, 22, 28, 34, 41, 48, 56, 64];

  // Find the corresponding wind speed based on the Beaufort scale
  let windSpeed = windSpeeds[beaufortValues.indexOf(beaufortScale)];
  
  let suitabilityMessage = '';
  if (windSpeed > 5) {
    suitabilityMessage = 'Your location is suitable for a small wind energy system.';
  } else {
    suitabilityMessage = 'Your location may not be suitable for a small wind energy system.';
  }
  resultContainer.innerHTML = `<p>The estimated wind speed is approximately ${windSpeed} m/s. ${suitabilityMessage}</p>`;
}

function calculateRebate() {
  // Get selected state from the dropdown
  var stateDropdown = document.getElementById("stateDropdown");
  var selectedState = stateDropdown.value;

  // Get rebate information based on the selected state
  var rebateInfo = getRebateInfo(selectedState);

  // Display the result
  var resultElement = document.getElementById("resultt");
  resultElement.textContent = rebateInfo;
}

function getRebateInfo(state) {
  // Replace this with actual rebate information for each state
  var rebateMap = {
    "Alabama": "",
  "Alaska": "",
  "Arizona": "Property tax exemption: Arizona residents who install solar panels won’t have to pay taxes on the increased value of their home. Residential Solar and Wind Energy Systems Tax Credit: Arizona offers a statewide tax credit worth 25 percent of the cost of your solar panels, capped at $1,000. Sales tax exemption: If you purchase solar panels in Arizona, you won’t have to pay sales tax.",
  "Arkansas": "",
  "California": "Property tax exemption: If you install solar panels before the end of 2024, you will be exempt from paying increased property taxes. Sales and use tax exemption: Solar panels and other solar equipment are exempt from sales and use tax in California. Self-Generation Incentive Program: If you install a solar battery for your home or business, you can qualify for a rebate valued at 15–20 percent of the battery cost.",
  "Colorado": "100% sales and use tax exemption for solar and battery technologies.100% property tax exemption for the value added by solar and battery technologies. Rebate worth 25% of solar project costs up to $2,500",
  "Connecticut": "100% sales and use tax exemption for solar and battery technologies. 100% property tax exemption for the value added by solar and battery technologies",
  "Delaware": "",
  "Florida": "Property tax exemption: Florida residents who install solar panels won’t have to pay more in property taxes as a result of the increase to their home value. Sales tax exemption: Solar energy systems are exempt from sales tax in Florida.",
  "Georgia": "Solar easement laws: Georgia’s solar easement law protects your access to sunlight. For example, a tree on your neighbor’s property cannot reach a height where it blocks your access to sunlight because of this law. All easements must be documented in writing in Georgia.",
  "Hawaii": "",
  "Idaho": "",
  "Illinois": "Value added by solar won’t raise your property taxes. Awards participants one renewable energy credit (REC) for every 1,000 kWh of solar production for 15 years, which can be sold on marketplaces for cash. Residential solar owners are compensated for their excess production at retail electricity rates.",
  "Indiana": "",
  "Iowa": "",
  "Kansas": "",
  "Kentucky": "",
  "Louisiana": "",
  "Maine": "",
  "Maryland": "100% exemption from state sales tax on solar purchases. A 100% property tax exemption for the home value added by solar energy equipment. Rebate worth up to $1,000 (pending legislation seeks to increase value to $5,000).",
  "Massachusetts": "Solar Massachusetts Renewable Target (SMART): The SMART program pays customers of Massachusetts utilities a fixed amount for every kilowatt-hour of energy residential solar panels produce. aSupplier rebates: There are a variety of electricity suppliers in Massachusetts offering rebates based on the size of your solar system. Reach out to your supplier for details.",
  "Michigan": "",
  "Minnesota": "Solar owners are compensated at retail rates for excess production exported onto the grid. 100% state sales tax exemption on solar equipment. Upfront rebate worth $0.29 per kWh of expected annual average production, up to $5,000.",
  "Mississippi": "",
  "Missouri": "",
  "Montana": "",
  "Nebraska": "",
  "Nevada": "Partial property and sales tax exemptions: The Renewable Energy Tax Abatement program in Nevada offers a partial sales and use tax as well as property tax reductions for renewable energy installations, including solar panels. Solar owners can get a 55 percent property tax abatement for 20 years after installation and will only have to pay a 2.6 percent sales and use tax on their panels.",
  "New Hampshire": "",
  "New Jersey": "100% state sales tax exemption for solar purchases. 100% property tax exemption for the value added by solar PV systems. Residential solar owners are compensated for their excess production at retail electricity rates.",
  "New Mexico": "",
  "New York": "NY-Sun Program: NY-Sun offers several financial incentives if you install solar panels. This initiative funds New York’s Megawatt Block Incentive (a rebate program offering money based on the size of your system) and the state’s community solar program. Residential Solar Tax Credit: New York’s state solar tax credit offers 25 percent of the cost of your solar panels in credit, with a cap of $5,000.",
  "North Carolina": "Property tax exemption: North Carolina residents who own a solar system that is not used to generate income or in connection with a business are exempt from paying increased property taxes on their solar panels.",
  "North Dakota": "",
  "Ohio": "Exemption for state sales tax on solar purchases.SRECs worth $4.25 per MWh of generation.Compensation for excess solar generation exported onto grid, varies by utility provider.",
  "Oklahoma": "",
  "Oregon": "",
  "Pennsylvania": "",
  "Rhode Island": "",
  "South Carolina": "",
  "South Dakota": "",
  "Tennessee": "",
  "Texas": "Austin Energy Residential Solar Rebate Program: If you live in Austin and complete Austin Energy’s solar education course, you may be eligible for a $2,500 rebate. Property tax exemption: If you install solar panels in Texas, you can apply for exemption from paying increased property taxes.",
  "Utah": "",
  "Vermont": "",
  "Virginia": "Property tax exemption: If you own solar panels, you may qualify for a partial or total exemption on higher property taxes as a result of your property value increasing because of your solar system.",
  "Washington": "",
  "West Virginia": "",
  "Wisconsin": "",
  "Wyoming": ""
  };

  // Return rebate information for the selected state
  return rebateMap[state] || "Rebate information not available for this state.";
}
