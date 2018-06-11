function Contact(first, last , street, city, state){
  this.firstName = first;
  this.lastName = last;
  this.streetName= street;
  this.cityName = city;
  this.stateName = state;
}

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedStreet = $("input#new-street-name").val();
    var inputtedCity = $("input#new-city-name").val();
    var inputtedState = $("input#new-state-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedStreet, inputtedCity, inputtedState);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
    $("ul#contacts").append("<li><span class='contact'>" + newContact.lastName + "</span></li>");
    $("ul#contacts").append("<li><span class='contact'>" + newContact.streetName + "</span></li>");
    $("ul#contacts").append("<li><span class='contact'>" + newContact.cityName + "</span></li>");
      $("ul#contacts").append("<li><span class='contact'>" + newContact.stateName + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});
