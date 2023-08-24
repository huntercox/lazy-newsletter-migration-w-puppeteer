# lazy-newsletter-migration-w-puppeteer

I had a list of form entries in JSON with no way of importing into Gravity Forms. (they don't offer this for form entries...)

The form entries were captured via collecting the name, email from form submission email notifications because the plugin being used (ContactForms7) doens't have a built in way of 
colleting form entries that were submitted. People signed up for the newsletter but the only way the signups were being collected was they were manually being added to a JSON file. 

🫤

Since I had a list of entries in JSON and the ability to add new entries manually via the frontend form, I decided to get around GravityForms' issue of no importing entries by 
using Puppeteer to manually go through the JSON list and submit the form again. 

This shouldn't be done unless you have permission to do this on the form, and even then- probably 
not the best way to go about it. 

