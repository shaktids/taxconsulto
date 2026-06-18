const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '../config.json');
const publicDir = path.join(__dirname, '../public');

// Read configuration
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Define replacements
const replacements = {
    '<!-- CONTACT_PHONE -->': config.phoneNumber,
    '<!-- CONTACT_EMAIL -->': config.emailAddress,
    '<!-- CONTACT_WHATSAPP_LINK -->': config.whatsappLink,
    '<!-- CONTACT_PHONE_TEL -->': `tel:+91${config.phoneNumber}`, // For href attributes
    '<!-- CONTACT_EMAIL_MAILTO -->': `mailto:${config.emailAddress}`, // For href attributes
    '<!-- BASE_URL -->': config.baseURL // For sitemap and other absolute URLs
};

// Function to process HTML files
function processHtmlFiles(dir) {
    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            processHtmlFiles(filePath); // Recurse into subdirectories
        } else if (filePath.endsWith('.html') || filePath.endsWith('.xml')) { // Also process sitemap.xml
            let content = fs.readFileSync(filePath, 'utf8');
            let changed = false;

            for (const placeholder in replacements) {
                if (content.includes(placeholder)) {
                    content = content.split(placeholder).join(replacements[placeholder]);
                    changed = true;
                }
            }

            if (changed) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Processed: ${filePath}`);
            }
        }
    });
}

console.log('Starting contact info replacement...');
processHtmlFiles(publicDir);
console.log('Contact info replacement complete.');
