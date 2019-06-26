<template>
  <div id="app">
    <main class="container-fluid">
      <div class="row">
        <div class="col-2">
          <b-button @click="closeAll()" variant="outline-dark">Close all</b-button>
        </div>
        <div class="col-8">
          <h1>{{ store.title }}</h1>
        </div>
        <div class="col-2">
          <b-button @click="openAll()" variant="outline-dark">Open all</b-button>
        </div>
      </div>
      <b-card-group columns id="elements">
        <div v-for="(element, index) in store.elements">
          <reminder :content="element" :reminder_index="index" @toggle-reminder="toggleReminder"></reminder>
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
  methods: {
    toggleReminder (index) {
      this.store.elements[index].visible = !this.store.elements[index].visible
    },
    changeAll (visible) {
      this.store.elements.forEach(function (reminder, index) {
        reminder.visible = visible
      })
    },
    openAll () {
      this.changeAll(true)
    },
    closeAll () {
      this.changeAll(false)
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
    if (typeof remindStore.elements !== 'object' || typeof remindStore.elements[0] === 'undefined') {
      console.log('Store type is ' + typeof remindStore.elements)
      alert('Error: cannot retrieve store elements')
    }
    let defaultVisible = remindStore.config.default_visible
    remindStore.elements.forEach(function (reminder, index) {
      reminder.visible = defaultVisible
    })
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
  margin-top: 5px;
}

</style>
