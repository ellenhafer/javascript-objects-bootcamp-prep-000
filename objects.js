var playlist = {};
playlist['Elvis Presley'] = ['Hound Dog'];

function updatePlaylist(object, artist, song) {
  object[artist] = [song];
  return object;
}

function removeFromPlaylist(object, artist) {
  delete object[artist];
  return object;
}

console.log(updatePlaylist(playlist, "Bruno Mars", "Just The Way You Are"));