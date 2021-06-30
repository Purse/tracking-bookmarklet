(function() {
  try {
    const pageState = document.querySelector('[data-a-state=\'{"key":"page-state"}\']');
    const trackingId = JSON.parse(pageState.innerText).trackingId.trim();
    const amazonOrderId = location.href.match(/orderId=(\d{3}-\d{7}-\d{7})/)[1];
    if (!amazonOrderId) {
      throw new Error('Cannot retrieve amazonOrderId from URL');
    }
    if (trackingId) {
      const res = confirm("Click 'OK' to send Tracking Number to purse: " + trackingId);
      if (res) {
        location.href = 'https://purse.io/add-tracking/' + amazonOrderId + '/' + trackingId;
      }
    } else {
      alert("It looks like the package hasn't been shipped yet.\nTry again later once it's been shipped");
    }
  } catch (error) {
    console.log('Tracking-Bookmarklet Error:', error);
    alert("Unable to retrieve Tracking Number.\nAre you sure you're on an Amazon tracking page?\nIf you think this is an error please send a message to support@purse.io to let us know.");
  }
})();
