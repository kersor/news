export default async function handler(req, res) {
  const { year, month } = req.query
  const API_KEY = process.env.VITE_API_TOKEN 

  if (!year || !month) {
    res.status(400).json({ error: 'year and month are required' })
    return
  }

  try {
    const response = await fetch(`https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=${API_KEY}`)
    const data = await response.json()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch NYT API' })
  }
}
