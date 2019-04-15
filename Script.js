/*
  Input:  URL of a tweet you want to share.
  Output:  Embed code for a blog.
  
  Usig twitter API:  https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/overview
*/
let inputUrl = args.urls[0]
let requestUrl = "https://publish.twitter.com/oembed?url=" + encodeURIComponent(inputUrl)
let publishRequest = new Request(requestUrl)

let body = await publishRequest.loadString()
let obj = JSON.parse(body)
let embedCode = obj.html

Pasteboard.copyString(embedCode)

let notify = new Notification()
notify.title = "Embed code copied!"
// notify.body causes notification to fail for some reason
let fireDate = new Date()
fireDate.setMilliseconds(fireDate.getMilliseconds() + 500)
notify.setTriggerDate(fireDate)
notify.schedule()
