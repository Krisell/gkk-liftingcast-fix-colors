let enabled = false
chrome.runtime.onMessage.addListener((display) => {
  if (enabled) {
    document.getElementById('gkk-fix-colors').remove()
    enabled = false
    return
  }

  const style = document.createElement('style')
  style.id = 'gkk-fix-colors'
  style.textContent = `
  .table-wrapper * {
    color: black !important;
  }

  .table-cell {
    background: white !important;
  }
  `

  document.head.append(style)

  enabled = true
})
