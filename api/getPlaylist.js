

export default async function handler(req, res) {
    const { channelId } = req.query;
  
    if (!channelId) {
      return res.status(400).json({ error: 'Missing channelId' });
    }
  
    const apiKey = process.env.YOUTUBE_API_KEY;
  
    const url = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const playlistId = data?.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
      if (playlistId) {
        res.status(200).json({ playlistId });
      } else {
        res.status(404).json({ error: 'Playlist ID not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'API request failed' });
    }
  }
  
// export default function handler(req, res) {
//   res.status(200).json({ message: "This works!" });
// }
