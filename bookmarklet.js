const pageState = document.querySelctor(`[data-a-state='{"key":"page-state"}']`);
const trackingId = "Not Defined"
try {
    JSON.parse(pageState.innerText).trackingId
} catch (error) {
    console.log("Unable to find trackingID", error)
}
alert("Tracking ID: " + trackingId)
