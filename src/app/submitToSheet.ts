const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbwnTIdo4umB6AL0hpuo9FyqzJXF1w9V6LgzR4bbEFsvmQ3BagaRZNg-wvzhV6NXRh1wNA/exec';

export async function submitToSheet(payload: Record<string, string>) {
  try {
    await fetch(GOOGLE_SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(payload),
    });
  } catch {
    console.error('Ошибка отправки в Google Sheets');
  }
}
