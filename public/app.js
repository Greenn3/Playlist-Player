async function getUploadsPlaylistId() {
  const channelId = document.getElementById('channelIdInput').value.trim();
  const output = document.getElementById('output');

  if (!channelId) {
    output.textContent = '❌ Please enter a Channel ID.';
    return;
  }

  try {
    const res = await fetch(`/api/getPlaylistId?channelId=${channelId}`);
    const data = await res.json();

    if (data.playlistId) {
      output.textContent = `✅ Uploads Playlist ID:\n${data.playlistId}`;
    } else {
      output.textContent = `⚠️ Error: ${data.error}`;
    }
  } catch (err) {
    output.textContent = `❌ Error: ${err.message}`;
  }
}
