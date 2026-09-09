# User Stories

## Format
```
As a [user type],
I want to [action/capability],
So that [business value/benefit].
```

---

## Member User Stories

### Authentication

**US-001: Member Login**
- As a member,
- I want to log in with my email and password,
- So that I can access my reservation information and book facilities.

**US-002: Member Registration**
- As a new club member,
- I want to create an account with my basic information,
- So that I can start making reservations.

**US-003: Password Reset**
- As a member,
- I want to reset my password if I forget it,
- So that I can regain access to my account.

### Reservations - Viewing & Browsing

**US-004: View Available Time Slots**
- As a member,
- I want to see available time slots for a specific facility and date,
- So that I can choose a convenient time to book.

**US-005: View Facility Details**
- As a member,
- I want to view details about a facility (location, capacity, amenities, hours),
- So that I can decide if it meets my needs.

**US-006: View My Reservations**
- As a member,
- I want to see a list of my current and past reservations,
- So that I can track my bookings.

### Reservations - Creating & Managing

**US-007: Create a Reservation**
- As a member,
- I want to select a facility, date, and time slot, then confirm my booking,
- So that I can reserve the facility for my intended use.

**US-008: Modify a Reservation**
- As a member,
- I want to change the date or time of an existing reservation,
- So that I can adjust my booking if my plans change.

**US-009: Cancel a Reservation**
- As a member,
- I want to cancel a future reservation,
- So that the time slot becomes available for other members.

### Member Profile

**US-010: View My Profile**
- As a member,
- I want to view my account information (name, email, membership status),
- So that I can verify my details are correct.

**US-011: Update My Profile**
- As a member,
- I want to update my contact information,
- So that the club can reach me if needed.

---

## Admin User Stories

### Facility Management

**US-101: Add a New Facility**
- As an admin,
- I want to add a new facility to the system with details (name, location, capacity, operating hours),
- So that members can start booking it.

**US-102: Edit Facility Details**
- As an admin,
- I want to modify facility information (hours, capacity, availability),
- So that the system stays up-to-date with operational changes.

**US-103: Mark Facility as Unavailable**
- As an admin,
- I want to block a facility from being booked (e.g., for maintenance),
- So that members don't book during unavailable periods.

### Member Management

**US-104: View All Members**
- As an admin,
- I want to see a list of all club members,
- So that I can manage memberships and monitor activity.

**US-105: Deactivate Member**
- As an admin,
- I want to deactivate a member's account,
- So that they can no longer make reservations.

### Reservation Management

**US-106: View All Reservations**
- As an admin,
- I want to see all reservations across the club,
- So that I can manage facility usage and resolve conflicts.

**US-107: Cancel Member Reservation**
- As an admin,
- I want to cancel a member's reservation if needed,
- So that I can free up a time slot for operational reasons.

**US-108: View Reservation Analytics**
- As an admin,
- I want to see reports on facility usage and booking trends,
- So that I can make data-driven decisions about scheduling and capacity.

---

## Guest User Stories (Unauthenticated)

**US-201: View Facility Information**
- As a guest,
- I want to view general information about club facilities,
- So that I can learn what's available before joining or registering.

**US-202: Contact Club**
- As a guest,
- I want to find contact information for the club,
- So that I can ask questions about memberships or facilities.
