const replaceSpaceWithEmoji = (message, emoji) => {
  try {
    if (!message || !String(message).match(/\s/)) {
      return 'invalid message';
    }
    return String(message).replace(/\s/g, emoji);
  } catch (e) {
    return 'invalid message';
  }
}

const [_p1, _p2, message, emoji] = process.argv;
console.log(replaceSpaceWithEmoji(message, emoji));
