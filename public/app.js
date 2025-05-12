async function getUploadsPlaylistId() {
  const channelId = document.getElementById('channelIdInput').value.trim();
  const output = document.getElementById('output');

  if (!channelId) {
    output.textContent = '❌ Please enter a Channel ID.';
    return;
  }

  try {
   const res = await fetch(`/api/getPlaylist?channelId=${channelId}`);
      // const res = await fetch(`/api/getPlaylist`);
    const data = await res.json();

    if (data.playlistId) {
      const playlistUrl = `https://www.youtube.com/playlist?list=${data.playlistId}`;
      output.innerHTML = `✅ Uploads Playlist ID: <a href="${playlistUrl}" target="_blank">${playlistUrl}</a>`;
      
    } else {
      output.textContent = `⚠️ Error: ${data.error}`;
    }
  } catch (err) {
    output.textContent = `❌ Error: ${err.message}`;
  }
}
