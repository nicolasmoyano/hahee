// Updated form submission code for when you have proper fields in Airtable
// Replace the current fields object in submit-consultation/route.ts with this:

fields: {
  'Email': email,
  'Phone': phone, 
  'Problems': problemAreas.join(', '),
  'Message': message || '',
  'Date': new Date().toISOString().split('T')[0],
  'Status': 'New',
},

// This will work once you add these fields to your Airtable table:
// - Email (Email field)
// - Phone (Phone number field)  
// - Problems (Long text field)
// - Message (Long text field)
// - Date (Date field)
// - Status (Single select field with options: New, Contacted, Completed)