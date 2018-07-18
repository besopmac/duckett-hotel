/*
 * Literal Object
 * 
var hotel = new Object();

hotel.name = 'Trump Tower';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function() {
  return this.rooms - this.booked;
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();
 */

// Construtor
var Hotel = function(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
      return this.rooms - this.booked;
    };
    
    var elName = document.getElementById('hotelName');
    var elRoom = document.getElementById('rooms');
    
    elName.textContent = this.name;
    elRoom.textContent = this.checkAvailability();
};

// Creating a literal instance of Hotel
var myHotel = Hotel('Hilton', 100, 38);
