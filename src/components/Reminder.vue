<template>
  <b-card no-body class="reminder" :style="style">
    <b-card-header header-tag="header">
      <b-button block @click="toggleReminder(reminder_index)">{{content.title}}</b-button>
    </b-card-header>
    <b-collapse :id="'collapse-'+reminder_index" v-model="content.visible">
      <b-card-body v-html="content.body"></b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: 'reminder',
  props: ['content', 'reminder_index'],
  data () {
    return {
      style: ''
    }
  },
  methods: {
    toggleReminder (index) {
      this.$emit('toggle-reminder', index)
    }
  },
  mounted () {
    const styles = {
      'blue': {'base': '#2A4A75', 'light': '#589AF5', 'hover': '#132236'},
      'red': {'base': '#751E1A', 'light': '#F54035', 'hover': '#360E0C'},
      'yellow': {'base': '#757013', 'light': '#F5EC26', 'hover': '#363309'},
      'green': {'base': '#287536', 'light': '#53F570', 'hover': '#123619'},
      'pink': {'base': '#6D1575', 'light': '#E42BF5', 'hover': '#320A36'},
      'brown': {'base': '#66645D', 'light': '#F7E9D7', 'hover': '#3B3A35'}
    }
    const colors = Object.keys(styles)
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    this.style = {
      '--base': styles[randomColor]['base'],
      '--light': styles[randomColor]['light'],
      '--hover': styles[randomColor]['hover']
    }
  }
}
</script>

<style lang="scss">
  .card-body {
    text-align: justify;
  }

  .reminder {
    border-color: var(--base);
    header {
      background-color: var(--light);
      button {
        background-color: var(--base); border-color: var(--base);
        &:hover {
          background-color: var(--hover); border-color: var(--base);
        }
      }
    }
    .card-body {
      background-color: var(--light);
    }
  }

</style>
