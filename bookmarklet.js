(function(){
const pageState = document.querySelector(`[data-a-state='{"key":"page-state"}']`);
try {
    const trackingId = JSON.parse(pageState.innerText).trackingId || "Package hasn't been shipped. Try again later";
    alert("Tracking ID: " + trackingId);
} catch (error) {
    console.log("PURSE | Unable to find trackingID: ", error);
    alert("Error getting tracking ID.  You might want to alert support@purse.io.");
}
})();
