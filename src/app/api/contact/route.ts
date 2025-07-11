// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfcZsDsNVXodcKSKJj7h8SNcrEAwm4kAkQ58rW1gAWIvRK06g/formResponse';

export async function POST(request: NextRequest) {
  try {
    console.log('API route called');
    
    const body = await request.json();
    console.log('Request body:', body);
    
    const { firstName, lastName, email, phone, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create form data for Google Forms
    const formData = new FormData();
    formData.append('entry.1633920210', firstName);
    formData.append('entry.2078842421', lastName);
    formData.append('entry.227649005', email);
    formData.append('entry.1770822543', phone || '');
    formData.append('entry.1846923513', message);

    console.log('Submitting to Google Forms...');

    // Submit to Google Forms
    const response = await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      body: formData,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Referer': 'https://docs.google.com/',
      },
    });

    console.log('Google Forms response status:', response.status);

    // Google Forms typically returns 200 or 302 for successful submissions
    if (response.status === 200 || response.status === 302 || response.status === 303) {
      console.log('Form submitted successfully');
      return NextResponse.json({ success: true, message: 'Form submitted successfully' });
    } else {
      const responseText = await response.text();
      console.log('Google Forms response:', responseText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { success: false, message: `Failed to submit form: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}