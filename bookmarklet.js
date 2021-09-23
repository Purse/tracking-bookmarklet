(function() {
  try {
    const pageState = JSON.parse(document.querySelector('[data-a-state=\'{"key":"page-state"}\']').innerText);
    const trackingId = pageState.trackingId.trim();
    const amazonOrderId = location.href.match(/orderId=(\d{3}-\d{7}-\d{7})/)[1];
    let statusText = '';

    try {
      statusText = pageState.promise.promiseMessage.trim();
    } catch (err) {
      ;
    }

    if (!amazonOrderId) {
      alert("Cannot retrieve amazon order ID.  are you sure you're on an Amazon tracking page");
    }

    if (trackingId) {
      let href = `https://purse.io/add-tracking/${amazonOrderId}/${trackingId}?ref=Bookmarklet`;

      if (statusText) {
        href += `&status=${encodeURIComponent(statusText)}`;
      }

      const res = confirm("Click 'OK' to send Tracking Number to purse: " + trackingId);
      if (res) {
        location.href = href;
      }
    } else {
      alert("It looks like the package hasn't been shipped yet.\nTry again later once it's been shipped");
    }
  } catch (error) {
    console.log('Tracking-Bookmarklet Error:', error);
    alert("Unable to retrieve Tracking Number.\nAre you sure you're on an Amazon tracking page?\nIf you think this is an error please send a message to support@purse.io to let us know.");
  }
})();
