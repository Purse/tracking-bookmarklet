(function(){
const pageState = document.querySelector(`[data-a-state='{"key":"page-state"}']`);
let trackingId = "Not Defined";
try {
    trackingId = JSON.parse(pageState.innerText).trackingId;
} catch (error) {
    console.log("PURSE | Unable to find trackingID: ", error);
}
alert("Tracking ID: " + trackingId);
})();
