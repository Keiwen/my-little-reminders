<template>
  <b-card no-body class="reminder">
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
    }
  },
  methods: {
    toggleReminder (index) {
      this.$emit('toggle-reminder', index)
    }
  }
}
</script>

<style>
  .card-body {
    text-align: justify;
  }
</style>
