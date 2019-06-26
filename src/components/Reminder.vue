<template>
  <b-card no-body class="reminder" :class="'reminder-'+color">
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
      color: 'none'
    }
  },
  methods: {
    toggleReminder (index) {
      this.$emit('toggle-reminder', index)
    }
  },
  mounted () {
    const colors = [
      'blue', 'red', 'yellow', 'green', 'pink', 'orange',
      'lightblue', 'darkblue', 'violet', 'brown', 'grey',
      'dark'
    ]
    this.color = colors[Math.floor(Math.random() * colors.length)]
  }
}
</script>

<style lang="scss">
  .card-body {
    text-align: justify;
  }

  @mixin colorReminder($color) {
    border-color: $color;
    header {
      background-color: lighten($color, 50%);
      border-bottom: 1px solid $color;
      button {
        background-color: $color; border-color: $color;
        &:hover {
          background-color: darken($color, 10%); border-color: $color;
        }
      }
    }
    .card-body {
      background-color: lighten($color, 50%);
    }
  }

  .reminder-blue {
    @include colorReminder(#285370);
  }
  .reminder-red{
    @include colorReminder(#662427);
  }
  .reminder-yellow {
    @include colorReminder(#AFA61D);
  }
  .reminder-green {
    @include colorReminder(#287536);
  }
  .reminder-pink {
    @include colorReminder(#662460);
  }
  .reminder-orange {
    @include colorReminder(#AF5D15);
  }
  .reminder-lightblue {
    @include colorReminder(#28726C);
  }
  .reminder-darkblue {
    @include colorReminder(#272E6D);
  }
  .reminder-violet {
    @include colorReminder(#46266B);
  }
  .reminder-brown {
    @include colorReminder(#664724);
  }
  .reminder-grey {
    @include colorReminder(#777777);
  }
  .reminder-dark {
    @include colorReminder(#333333);
  }

</style>
