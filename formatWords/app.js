
function formatWords (words) {
    if (!words) return '';
    words = words.filter(a => a != '');
    return words.slice(0,-2).join(', ') + (words.length > 2 ? ', ' : '') + words.slice(-2).join(' and ');
  }