<template>
  <b-card no-body class="reminder">
    <b-card-header header-tag="header" v-b-toggle="'collapse-'+reminder_index">
      <b-button block>{{content.title}}</b-button>
    </b-card-header>
    <b-collapse :id="'collapse-'+reminder_index">
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
  }
}
</script>

<style>
  .card-body {
    text-align: justify;
  }
</style>
