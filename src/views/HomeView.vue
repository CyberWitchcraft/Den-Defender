<template>
  <div class="columns">
    <div class="column">
      <DefenderForm></DefenderForm>
    </div>
    <div class="column">
      <MainReport></MainReport>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DefenderForm from '@/components/DefenderForm.vue';
import MainReport from '@/components/MainReport.vue';

export default {
  name: 'HomeView',
  components: {
    DefenderForm,
    MainReport,
  }
}
</script>

<style lang="scss">
.column {
  padding: 40px;
}
</style>
