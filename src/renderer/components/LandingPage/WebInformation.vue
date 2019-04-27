<template>
  <div>
    <!-- <webview id="myweb" src="http://localhost:8080/" style="display:inline-flex; width:640px; height:480px"></webview> -->
    <webview id="myweb" src="http://localhost:8080/" preload="file:///D:/pooja/newVueElectron/my-project/src/renderer/components/LandingPage/inyector.js" style="display:inline-flex; width:640px; height:480px"></webview>  
  </div>
</template>

<script>
export default {
  mounted () {
    var webview = document.getElementById('myweb')

    // When everything is ready, trigger the events without problems
    webview.addEventListener('dom-ready', function () {
      console.log('DOM-Ready, triggering events !')
      webview.send('request')
      webview.send('alert-something', 'Hey, i m alerting this.')
      webview.send('change-text-element', {
        id: 'myelementID',
        text: 'My text'
      })
    })
    webview.addEventListener('ipc-message', function (event) {
      console.log('event', event)
      console.log('event.path[4]', event.path[4])
      // event.path[4]
      // var element, name, arr;
      document.getElementById('drag').classList.add('anotherclass')
      console.info('event.channel', event.channel)
    })
  }
}
</script>

<style scoped>
</style>
