import puppeteer from "puppeteer";

async function generatePdf() {
  // Launch a headless browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Load your app’s URL (change to the actual page URL you need)
  await page.goto("http://localhost:4173/", { waitUntil: "networkidle0" });

  // Set page dimensions and options for PDF
  const pdfOptions = {
    path: "./public/Jordan_Loeser_Resume.pdf", // Specify output path
    format: "A4", // Adjust format as needed
    printBackground: true, // Prints background colors
    margin: {
      top: "0in",
      bottom: "0in",
      left: "0in",
      right: "0in",
    },
  };

  // Generate PDF from the page content
  await page.pdf(pdfOptions);

  // Close the browser
  await browser.close();

  console.log("PDF generated successfully!");
}

// Run the function and handle errors
generatePdf().catch((error) => {
  console.error("Error generating PDF:", error);
});
