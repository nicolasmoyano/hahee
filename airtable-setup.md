# Airtable Table Setup Instructions

## For Form Submissions (Consultations)

You need to create a table in your Airtable base with these fields:

### Required Fields:

1. **Email** (Email field type)
2. **Phone** (Phone number field type)
3. **Problems** (Long text field type)
4. **Message** (Long text field type)
5. **Date** (Date field type)
6. **Status** (Single select field type with options: "New", "Contacted", "Scheduled", "Completed")

### Steps to Create the Table:

1. Go to your Airtable base: https://airtable.com/appJVo0IX1fy8h9Aw
2. Create a new table called "Consultations" or "Form Submissions"
3. Add the fields listed above
4. Copy the new table ID from the URL (it will look like `tblXXXXXXXXXXXXXX`)
5. Update your .env.local file with: `AIRTABLE_TABLE_ID=your_new_table_id`

### Alternative: Use Existing Table

If you want to use your existing table (tblK6AI268KVkt3UG), add these fields to it:

- Email (Email field)
- Phone (Phone number field)
- Problems (Long text field)
- Message (Long text field)
- Date (Date field)
- Status (Single select field)

### Current Field Names in API:

The form submission API is currently trying to save:

- Email: User's email address
- Phone: User's phone number
- Problems: Selected problem areas (comma-separated)
- Message: Additional information from user
- Date: Submission date (YYYY-MM-DD format)
- Status: "New" (for new submissions)
