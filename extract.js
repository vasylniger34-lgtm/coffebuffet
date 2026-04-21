const fs = require('fs');
const content = fs.readFileSync('C:/Users/avefa/.gemini/antigravity/brain/49ab7666-599a-48d1-8c41-7120faa6d31d/.system_generated/steps/6/content.md', 'utf8');
const htmlMatch = content.match(/<script id=\"menu-data\" type=\"application\/json\">\s*([\s\S]*?)\s*<\/script>/);
if (htmlMatch) { 
  fs.writeFileSync('data.json', htmlMatch[1]);
  console.log('data.json created');
} else {
  console.log('Data not found');
}
