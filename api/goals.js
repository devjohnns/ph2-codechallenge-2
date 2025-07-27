import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'db.json');

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      const data = fs.readFileSync(DB_PATH, 'utf8');
      const db = JSON.parse(data);
      res.json(db.goals || []);
    } catch (error) {
      res.status(500).json({ error: 'Failed to read goals' });
    }
  } else if (req.method === 'POST') {
    try {
      const { goals } = req.body;
      const db = { goals };
      fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to save goals' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}