export default async function handler(req, res) {
  const { path } = req.query; // массив сегментов после /nyt/
  const API_KEY = process.env.VITE_API_TOKEN; // NYT API ключ из env

  if (!path || path.length < 2) {
    res.status(400).json({ error: 'Invalid request' });
    return;
  }

  const year = path[0];
  const monthFile = path[1]; // например "5.json"

  const targetUrl = `https://api.nytimes.com/svc/archive/v1/${year}/${monthFile}?api-key=${API_KEY}`;

  try {
    const response = await fetch(targetUrl);
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error('NYT API fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch NYT API' });
  }
}
