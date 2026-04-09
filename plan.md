# Booking Form Implementation Plan

Implement a "Book Now" feature in the salon management application using a modal-based form with client-side validation and asynchronous submission.

## 1. Constants Update
- Add `API_BASE_URL` to `src/lib/constants.ts` to centralize endpoint management.

## 2. New Component: BookingModal
- Create `src/components/BookingModal.tsx`.
- Use shadcn/ui components: `Dialog`, `Form`, `Input`, `Select`, `Button`, `Label`.
- Implement a form schema using `zod`.
- Use `react-hook-form` for form state and validation.
- Input fields:
  - Client Name (text)
  - Client Email (email)
  - Service (select from `MOCK_SERVICES`)
  - Date (datepicker or input[type=date])
  - Time (select or input[type=time])
  - Quantity/Guests (number)
- Submit logic:
  - Display "Booking..." state during fetch.
  - Send POST request to `/api/book-appointment` (simulated).
  - Use `sonner` to show success toast on completion or error toast on failure.

## 3. Update Appointments Page
- In `src/components/Appointments.tsx`:
  - Import `BookingModal`.
  - Maintain `isBookingModalOpen` state.
  - Attach `onClick={() => setIsBookingModalOpen(true)}` to the "Book Now" button.
  - Render `<BookingModal open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen} />`.

## 4. Verification
- Verify form validation (empty fields, invalid email).
- Verify loading state during submission.
- Verify toast notifications appear correctly.
- Ensure responsive design of the modal.
