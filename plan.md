# Task: Change stylist names to Kenyan names

## Objective
Update the placeholder staff and stylist names in the application to common Kenyan names to better reflect the local context.

## File Changes

### 1. `src/lib/constants.ts`
- Update `MOCK_STAFF` array with Kenyan names:
    - Sarah Johnson -> Faith Mutua
    - Michael Rossi -> David Omari
    - Emma Laurent -> Grace Wambui
    - Jessica White -> Sarah Njeri
- Update `MOCK_APPOINTMENTS` array:
    - Update `stylist` fields to match new staff names (shortened forms like "Faith M.", "David O.").
    - Update `client` fields to Kenyan names for consistency (e.g., Jane Wanjiku, John Kamau).

## Verification
- Run `validate_build` to ensure no syntax errors.
- Confirm names are correctly displayed in the UI (mentally based on code changes).
