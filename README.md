This was developed due to changes with how Amazon presents tracking information.

Visit [our support docs](https://support.purse.io/en/article/adding-tracking-numbersorder-ids-9u2o4j/) for more info.

## How to
1. Simply drag this link to your bookmarks bar: <a href="javascript:(function(){var jsCode=document.createElement('script');jsCode.setAttribute('src','https://purse.github.io/tracking-bookmarklet/bookmarklet.js');document.body.appendChild(jsCode);}());">Get Tracking Number</a>
2. When viewing an amazon tracking page, click the bookmarklet and it will grab the tracking number and automatically assign it to the corresponding purse order.

## Video instructions
![BookmarkletHow2](https://purse.github.io/tracking-bookmarklet/BookmarkletHow2.gif)

<!-- [![Amazon Tracking Bookmarklet](http://i.imgur.com/Ot5DWAW.png)](https://youtu.be/StTqXEQ2l-Y?t=35s "Amazon Tracking Bookmarklet") -->

## Manual Installation Method
If you are unable to drag the bookmarklet link (For instance, if you're installing on a mobile browser), then you can manually create a bookmark with the following code.  This is a slightly more advanced way to install a bookmarklet, but with the help of the tutorials below you should be able to get it working easy enough:
<textarea readonly cols="40" rows="7">
javascript:(function(){var jsCode=document.createElement('script');jsCode.setAttribute('src','https://purse.github.io/tracking-bookmarklet/bookmarklet.js');document.body.appendChild(jsCode)}());
</textarea>

Some example tutorials can be found here:
[https://www.cultofmac.com/500532/how-to-add-bookmarklet-mobile-iphone-safari/](https://www.cultofmac.com/500532/how-to-add-bookmarklet-mobile-iphone-safari/)
[https://www.howtogeek.com/189358/beginner-geek-how-to-use-bookmarklets-on-any-device/](https://www.howtogeek.com/189358/beginner-geek-how-to-use-bookmarklets-on-any-device/)

## Source Code
You can review the Source Code for this bookmarklet here: [https://github.com/Purse/tracking-bookmarklet/blob/main/bookmarklet.js](https://github.com/Purse/tracking-bookmarklet/blob/main/bookmarklet.js)

## Script Blockers
If you run a script blocker (like [umatrix](https://chrome.google.com/webstore/detail/umatrix/ogfcmafjalglgifnmanfmnieipoejdcf)) then you'll need to allow this script (from purse.github.io) to run on amazon.com in order for the bookmarklet to work.  otherwise, you will need to hack up your own bookmarklet from the source code.  but keep in mind if you go this route, then you'll need to manually apply any updates if we (Purse.io) make changes or improvements to the bookmarklet.
