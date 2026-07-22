// Add this import at the top of your script
import { useQuery } from "convex/react"; // If using React
// OR for vanilla JS, use fetch to your Netlify function:

async function validateTicket(code) {
    const response = await fetch('/api/validate-ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
    });
    return await response.json();
}