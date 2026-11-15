# FushaGo — Business rules and flows (Part 6)

This file is the source of truth for building version 1. If the code and this file disagree, this file wins until we update it.

---

## Users and roles

| Role | Who | What they CAN do | What they CANNOT do |
|---|---|---|---|
| **Visitor** | Anyone, not logged in | Browse venues and pitches, see free slots and prices. | Book, cancel. |
| **Player** | Registered user (usually the team captain) | Book a slot, see their bookings, cancel their own bookings, share a booking link to WhatsApp. | See other players' details, edit prices, mark no-shows. |
| **Venue owner** | Owner of a pitch venue (paying customer) | Create and edit their venue and pitches, set opening hours and prices, block slots, add recurring weekly bookings, see all bookings at their venue, cancel bookings (with a reason), mark no-shows, approve booking requests, add staff. | See or change other venues, delete a player's account. |
| **Staff** | Employee added by the owner | See today's and upcoming bookings, add walk-in or phone bookings, mark no-shows. | Change prices, opening hours or subscription; add other staff. |
| **Admin** | FushaGo team | Approve new venues, manage subscriptions, block abusive users, see all data for support. | — |

---

## The 3 most important flows

### Flow 1 — Player signs up and books a pitch
1. A player opens **fushago.app** (or a link shared in WhatsApp).
2. They choose a **city** and a **date**. They see the venues with free slots that day.
3. They pick a venue → pitch → **free 1-hour slot** (taken slots are grey).
4. They tap **"Book"**. If not logged in, they sign up with **name, email, phone number, password** and confirm their email.
5. The booking summary appears: venue, pitch, date, time, price, *"pay at the venue"*, and the cancellation deadline.
6. They tap **"Confirm booking"**.
   - Normal player → booking is **Confirmed** at once.
   - Player with 2 strikes → booking is **Pending** until the owner approves it (rule 7).
7. The player gets a **confirmation email**. The owner sees the booking in their dashboard.
8. The player can tap **"Share in WhatsApp"** to send the time, place and per-person price to their team.

### Flow 2 — Reminder and cancellation
1. **3 hours before** the game, the player receives a reminder email with two buttons: **"We're coming"** and **"Cancel booking"**.
2. If the player cancels **6 or more hours before** the start → free cancellation; the slot becomes free again at once.
3. If the player cancels **less than 6 hours before** → the cancellation is allowed, the slot becomes free, and the player gets **½ strike** (late cancellation).
4. The owner is notified of every cancellation.
5. If the owner must cancel (e.g. broken lights), they choose a reason. The player gets an email right away. The player gets **no strike**.

### Flow 3 — Venue owner joins and runs a game night
1. The owner signs up as **"Venue owner"** and adds: venue name, address, phone, photos.
2. They add **pitches** (name, indoor/outdoor, size) and **opening hours**.
3. They set **prices** (normal price + optional evening "peak" price).
4. They add **recurring bookings** for regular teams (e.g. "Every Tuesday 20:00, Team Dardania").
5. An **admin approves** the venue → it becomes visible to players. The 3-month free trial starts.
6. Every evening the owner opens **"Today"** and sees all bookings in a timeline.
7. After each slot, the owner (or staff) taps **"Played"** or **"No-show"**. If no one marks it within 24 hours, it counts as **Played**.

---

## Business rules

1. **Slots are 1 hour** and start on the hour (18:00, 19:00, …), only within the venue's opening hours.
2. **One booking per pitch per slot.** Whoever confirms first gets it, and the second person sees "Just taken, pick another time."
3. **Players can book up to 14 days ahead**, and no later than **30 minutes before** the slot starts.
4. **A player can hold at most 2 future bookings** at the same time (stops people holding slots "just in case").
5. **Free cancellation until 6 hours before** the start. Later cancellation = **½ strike**.
6. **A no-show = 1 strike.** Only the owner or staff can mark a no-show, and only within 24 hours after the slot.
7. **2 strikes within 60 days** → the player loses instant booking. Their new bookings become **requests** the owner must approve. Strikes older than 60 days disappear automatically.
8. **Payment happens at the venue** (cash or card) in v1. The price shown in FushaGo is the price paid at the venue; there are no hidden fees for players.
9. **The owner sets prices.** A price change only affects **new** bookings, never existing ones.
10. **Owners can block slots** (maintenance, tournaments). They cannot block a slot that already has a booking. They must cancel that booking first, with a reason.
11. **Players must confirm their email** before their first booking.
12. **Per-person price** shown in the WhatsApp share = slot price ÷ number of players (default 10). It is information only; FushaGo does not collect it.
13. **A venue is only visible to players** after admin approval and while its subscription (or free trial) is active. If the subscription ends, existing bookings still happen but no new bookings are accepted.

---

## What version 1 will NOT do

- ❌ **No online payments or deposits.** Stripe is, as far as we know, not available for businesses in Kosovo or North Macedonia; we'll look at local payment providers for v2.
- ❌ **No native mobile app.** It's a mobile-first website only (it can be added to the home screen).
- ❌ **No SMS or WhatsApp bot.** Email reminders and WhatsApp *share links* only.
- ❌ **No "find missing players"** or matchmaking between strangers.
- ❌ **No tournaments or leagues.**
- ❌ **No reviews or ratings** of venues or players.
- ❌ **No Macedonian language yet.** v1 is Albanian + English. Macedonian comes in v2.
- ❌ **No sports other than football** (no padel, basketball, tennis).
- ❌ **No booking slots shorter or longer than 1 hour** (no 90-minute games).
