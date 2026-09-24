// 1. Create the attendee object
const attendee = {
    attendeeId: "T001",
    name: "Alice Smith",
    event: "JavaScript Conference",
    ticketType: "VIP",
    ticketPrice: 150.00
};

// 2. Function to log the attendee's name
function logAttendeeName(attendeeObj) {
    console.log(attendeeObj.name);
}

// 3. Function to log the ticket price
function logTicketPrice(attendeeObj) {
    console.log(attendeeObj.ticketPrice);
}

// 4. Function to update the ticket type
function updateTicketType(attendeeObj, newTicketType) {
    attendeeObj.ticketType = newTicketType;
}

// 5. Function to update the ticket price
function updateTicketPrice(attendeeObj, newPrice) {
    attendeeObj.ticketPrice = newPrice;
}

// 6. Function to remove the event property
function removeEventProperty(attendeeObj) {
    delete attendeeObj.event;
}

// 7. Function to add the checkedIn property
function addCheckedInProperty(attendeeObj) {
    attendeeObj.checkedIn = true;
}