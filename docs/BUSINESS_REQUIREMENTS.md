# Business Requirements

## Project Overview
A simple reservation application for a private club that allows members to book facilities, time slots, or services online.

## Business Goals
- Enable members to self-serve reservations without staff intervention
- Reduce double-bookings and scheduling conflicts
- Improve visibility of facility availability
- Enhance member experience with convenient online booking

## Key Features

### 1. Member Management
- Members must be registered in the system
- Members have different roles (Admin, Member, Guest)
- Member profiles contain basic contact information

### 2. Reservation Management
- Members can view available time slots
- Members can create, modify, and cancel reservations
- Reservations display facility, date, time, and duration
- System prevents double-booking of the same time slot

### 3. Facilities
- Club maintains a list of bookable facilities (e.g., Tennis Courts, Swimming Pool, Meeting Rooms)
- Each facility has specific hours of operation
- Facilities can have maximum capacity or booking limits

### 4. Authentication & Authorization
- Members must log in to access the system
- Admins can manage facilities, members, and view all reservations
- Regular members can only view/manage their own reservations

## Business Rules

### Reservation Rules
- **Minimum Notice**: Members must book at least 24 hours in advance
- **Maximum Advance Booking**: Members can book up to 90 days in advance
- **Cancellation Window**: Members can cancel up to 24 hours before the reservation
- **Max Concurrent Reservations**: A member can have maximum 3 active reservations
- **Booking Limits**: Each facility has a maximum occupancy or booking slots per time period

### Member Rules
- Members must have an active membership status
- Member information must be kept current
- Admins can deactivate or suspend members

### Facility Rules
- Facilities have defined operating hours
- Facilities can be marked as unavailable for maintenance
- Only admins can add or modify facilities

## Constraints & Assumptions

### Technical
- Application is web-based (React frontend)
- Single-timezone implementation (expandable to multi-timezone in future)
- No payment processing in MVP (manual payment tracking)

### Operational
- Club operates during standard business hours
- Facilities are not available 24/7
- Manual approval process may be required for certain reservation types (future enhancement)

## Success Metrics
- Members can complete a reservation in < 2 minutes
- System prevents 100% of double-bookings
- Member adoption rate > 80% within 3 months
- System uptime > 99.5%

## Out of Scope (Future Phases)
- Payment processing and billing
- Multi-facility complex scheduling
- Waitlist functionality
- Recurring reservations
- Member ratings/reviews
- Email notifications (Phase 2)
