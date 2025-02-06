# Flight Booking System
This is a backend application for a flight booking system built MongoDB with Mongoose for data modeling. The system allows users to book flights, manage bookings, and process payments.

# Features
User Management: Users can register, log in, and manage their profiles.

Flight Management: Admins can add, update, and manage flights.

Booking Management: Users can book flights, view their bookings, and cancel them.

Payment Integration: Payments can be processed for bookings.

Airport Management: Admins can manage airport details.

# Models
The application uses the following Mongoose models:

# User:

name: Full name of the user.

email: Unique email address of the user.

password: Password for authentication.

role: Role of the user (passenger or admin).

createdAt: Timestamp when the user was created.

# Airport:

name: Name of the airport.

code: Unique airport code.

city: City where the airport is located.

country: Country where the airport is located.

# Flight:

airline: Name of the airline.

flightNumber: Unique flight number.

departureAirport: Reference to the departure airport.

arrivalAirport: Reference to the arrival airport.

departureTime: Scheduled departure time.

arrivalTime: Scheduled arrival time.

seatsAvailable: Number of available seats.

price: Price of the flight.

# Booking:

user: Reference to the user who made the booking.

flight: Reference to the booked flight.

seatNumber: Seat number assigned to the user.

status: Status of the booking (booked or cancelled).

bookingReference: Unique booking reference number.

createdAt: Timestamp when the booking was created.

# Payment:

booking: Reference to the booking associated with the payment.

amount: Payment amount.

paymentMethod: Payment method used (credit_card, debit_card, or paypal).

status: Status of the payment (pending, completed, or failed).

transactionId: Unique transaction ID.

createdAt: Timestamp when the payment was created.

