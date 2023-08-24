const puppeteer = require('puppeteer');

(async () => {
	// Read your JSON data
	const data = [
		{
			"Date": "2023-08-12 22:52",
			"Name": "Example Name",
			"Email": "example@email.com",
		},
	];

	// Launch a browser instance
	const browser = await puppeteer.launch({ headless: true });  // headless set to false so you can watch the browser actions
	const page = await browser.newPage();

	// Iterate over the data and fill the form for each entry
	for (let entry of data) {
		await page.goto('https://example.com/', { waitUntil: 'networkidle2' });  // wait for the network to be idle to ensure everything's loaded

		// Split the name into first and last names
		const nameParts = entry.Name.split(' ');
		const firstName = nameParts[0];
		const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

		// Fill out the form and submit
		await page.type('#input_firstName', firstName);

		if (lastName) {
			await page.type('#input_lastName', lastName);
		}

		await page.type('#input_email', entry.Email);
		await page.click('#form_submit_button');


		// Wait for the form submission to complete (or a confirmation message to appear)
		await page.waitForTimeout(3000); // This waits for 3 seconds, adjust as needed or use another waitFor function as required
		await page.goto('https://example.com/', { waitUntil: 'networkidle2' });
	}

	await browser.close();
})();