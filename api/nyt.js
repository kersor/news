export default async function handler(req, res) {
  const { year, month, 'api-key': apiKey } = req.query;

  if (!year || !month || !apiKey) {
    res.status(400).json({ error: 'year, month and api-key are required' });
    return;
  }

  try {
    const url = `https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error('NYT API fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch NYT API' });
  }
}
