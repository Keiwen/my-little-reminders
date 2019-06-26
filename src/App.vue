<template>
  <div id="app">
    <main>
      <h1>{{ store.title }}</h1>
      <b-card-group columns id="elements">
        <div v-for="(element, index) in store.elements">
          <reminder :content="element" :reminder_index="index"></reminder>
        </div>
      </b-card-group>
    </main>
  </div>
</template>

<script>
import Reminder from '@/components/Reminder'

export default {
  name: 'my-little-reminder',
  components: {Reminder},
  data () {
    return {
      store: {}
    }
  },
  mounted () {
    let remindStore = {}
    let rawFile = new XMLHttpRequest()
    rawFile.open('GET', './static/store.json', false)
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status === 0) {
          let allText = rawFile.responseText
          remindStore = JSON.parse(allText)
        }
      }
    }
    rawFile.send(null)
    this.store = remindStore
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
}

</style>
