const {ipcRenderer} = require('electron')
ipcRenderer.on('request', function () {
    ipcRenderer.sendToHost(getScripts())
})
ipcRenderer.on('alert-something',function(event,data) {
    alert(data)
})
ipcRenderer.on("change-text-element",function(event,data){
    // the document references to the document of the <webview>
    document.getElementById(data.id).innerHTML = data.text;
})
function getScripts () {
  var items = []
  for(var i = 0;i < document.scripts.length;i++){
      items.push(document.scripts[i].src)
  }
  // let itemJson = JSON.stringify(items)
  // console.log(itemJson.path.body)
  return JSON.stringify(items)
}