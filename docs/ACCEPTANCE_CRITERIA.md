# Acceptance Criteria

## Format
```
Given [precondition],
When [action],
Then [expected result].
```

---

## US-001: Member Login

**AC-001.1: Successful Login**
- Given I am on the login page,
- When I enter a valid email and password,
- Then I am redirected to my dashboard and can see my reservations.

**AC-001.2: Invalid Credentials**
- Given I am on the login page,
- When I enter an invalid email or password,
- Then I see an error message "Invalid email or password" and remain on the login page.

**AC-001.3: Empty Fields**
- Given I am on the login page,
- When I click Login with empty email or password fields,
- Then I see validation messages "Email is required" and/or "Password is required".

**AC-001.4: Session Persistence**
- Given I am logged in,
- When I refresh the page,
- Then I remain logged in and my session is preserved.

---

## US-004: View Available Time Slots

**AC-004.1: Filter by Facility and Date**
- Given I am logged in on the reservations page,
- When I select a facility and date,
- Then I see all available time slots for that facility on that date.

**AC-004.2: Display Booked Slots**
- Given I am viewing available time slots,
- When a time slot is already booked,
- Then it is marked as "Unavailable" or grayed out and cannot be selected.

**AC-004.3: Show Slot Details**
- Given I am viewing available time slots,
- When I hover over or click a time slot,
- Then I see the duration, capacity, and any other relevant details.

**AC-004.4: Timezone Awareness**
- Given I am viewing time slots,
- When I select a date,
- Then all times are displayed in my local timezone.

---

## US-007: Create a Reservation

**AC-007.1: Successful Reservation**
- Given I have selected a facility, date, and available time slot,
- When I click "Confirm Booking",
- Then a confirmation message appears and the reservation is added to my account.

**AC-007.2: Prevent Double Booking**
- Given a time slot is already booked,
- When I attempt to book the same slot,
- Then the system prevents the booking and shows an error: "This slot is no longer available".

**AC-007.3: Enforce Minimum Notice**
- Given I am trying to book a facility,
- When the reservation is less than 24 hours away,
- Then the system prevents the booking and shows: "Reservations must be made at least 24 hours in advance".

**AC-007.4: Enforce Maximum Advance Booking**
- Given I am trying to book a facility,
- When the reservation is more than 90 days in the future,
- Then the system prevents the booking and shows: "You can only book up to 90 days in advance".

**AC-007.5: Enforce Concurrent Reservation Limit**
- Given I already have 3 active reservations,
- When I attempt to book another facility,
- Then the system prevents the booking and shows: "You have reached the maximum number of concurrent reservations (3)".

**AC-007.6: Confirmation Email**
- Given I successfully create a reservation,
- When the booking is confirmed,
- Then I receive a confirmation with reservation details (facility, date, time, booking reference). *(Phase 2)*

---

## US-008: Modify a Reservation

**AC-008.1: Change Date/Time**
- Given I have an upcoming reservation,
- When I click "Edit" and select a new available time slot,
- Then the reservation is updated and I see a confirmation message.

**AC-008.2: Prevent Modification Too Close to Reservation**
- Given my reservation is within 24 hours,
- When I attempt to modify it,
- Then the system prevents modification and shows: "Reservations cannot be modified within 24 hours of the scheduled time".

**AC-008.3: Availability Check During Modification**
- Given I am modifying a reservation to a new time slot,
- When that new slot is already booked,
- Then the system shows an error: "This slot is no longer available" and the modification is not saved.

---

## US-009: Cancel a Reservation

**AC-009.1: Successful Cancellation**
- Given I have an upcoming reservation,
- When I click "Cancel" and confirm,
- Then the reservation is removed from my account and I see a confirmation message.

**AC-009.2: Prevent Cancellation Too Close**
- Given my reservation is within 24 hours,
- When I attempt to cancel it,
- Then the system prevents cancellation and shows: "Cancellations must be made at least 24 hours in advance".

**AC-009.3: Confirmation Dialog**
- Given I click "Cancel" on a reservation,
- When a confirmation dialog appears,
- Then I can confirm or dismiss the cancellation.

---

## US-006: View My Reservations

**AC-006.1: Display Current Reservations**
- Given I am on my reservations page,
- When I load the page,
- Then I see all my upcoming reservations in chronological order.

**AC-006.2: Display Past Reservations**
- Given I am on my reservations page,
- When I click "Past Reservations",
- Then I see a history of completed and cancelled reservations.

**AC-006.3: Reservation Details**
- Given I view a reservation,
- When I click on it,
- Then I see full details: facility name, date, time, duration, location, and booking reference.

**AC-006.4: Empty State**
- Given I have no upcoming reservations,
- When I load my reservations page,
- Then I see a message: "You have no upcoming reservations. Browse facilities to get started."

---

## US-101: Add a New Facility (Admin)

**AC-101.1: Successful Facility Creation**
- Given I am logged in as an admin,
- When I fill in all required facility fields (name, location, capacity, operating hours) and click "Create",
- Then the facility is added to the system and appears in the facility list.

**AC-101.2: Validation**
- Given I am creating a facility,
- When I submit the form with missing required fields,
- Then I see validation errors for each empty field.

**AC-101.3: Unique Facility Name**
- Given a facility with the name "Tennis Court" already exists,
- When I attempt to create another facility with the same name,
- Then the system prevents creation and shows: "A facility with this name already exists".

---

## US-104: View All Members (Admin)

**AC-104.1: Display Member List**
- Given I am logged in as an admin,
- When I navigate to the Members section,
- Then I see a list of all registered members with name, email, and membership status.

**AC-104.2: Search Members**
- Given I am viewing the members list,
- When I enter a member name or email in the search field,
- Then the list filters to show matching members.

**AC-104.3: Sort Members**
- Given I am viewing the members list,
- When I click a column header,
- Then the list sorts by that column (name, email, join date, status).

---

## US-106: View All Reservations (Admin)

**AC-106.1: Display All Reservations**
- Given I am logged in as an admin,
- When I navigate to the Reservations section,
- Then I see all reservations across all members and facilities.

**AC-106.2: Filter by Facility**
- Given I am viewing all reservations,
- When I select a facility from the filter dropdown,
- Then the list shows only reservations for that facility.

**AC-106.3: Filter by Date Range**
- Given I am viewing all reservations,
- When I select a date range,
- Then the list shows only reservations within that date range.

**AC-106.4: View Member Details**
- Given I am viewing a reservation in the admin panel,
- When I click on a member name,
- Then I see the member's profile and reservation history.
