document.querySelectorAll('.fix-colors-button').forEach((button) => {
  button.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, button.dataset.fixColors)
    })
  })
})
