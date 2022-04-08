new Clappr.Player({
  source: "https://media.brimecdn.com/stream.m3u8",
  mute: false,
  autoPlay: true,
  parent: '#player-container',
  width: '100%',
  height: '100%',
  plugins: [ClapprNerdStats, ClapprStats],
    clapprNerdStats: {
    // Optional: provide multiple combination of keyboard shortcuts to show/hide the statistics.
    // For reference, visit: https://github.com/ccampbell/mousetrap.
    // Default: ['command+shift+s', 'ctrl+shift+s']
    shortcut: ['command+shift+s', 'ctrl+shift+s'],

    // Optional: position of the icon to show/hide the statistics.
    // Values: 'top-right', 'top-left', 'bottom-right', 'bottom-left', 'none'
    // Default: 'top-right'
    iconPosition: 'top-right'
  },
  hlsjsConfig: {
    // here any hls.js configuration options
  }
})