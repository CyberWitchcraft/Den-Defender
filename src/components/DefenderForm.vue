<template>
    <div class="header block">
        <h2 class="title is-3">Welcome to Den Defender <button class="js-modal-trigger"><icon class="material-icons">help</icon></button></h2> 
        <h2 class="subtitle">by 4FOX Security</h2> 
    </div>
    <div class="box is-warning">
        <p class="title is-5">Section {{ defender.sections.current +1 }}</p>
        <div class="block" v-for="q of defender.qList[defender.sections.current]" :key="q.ref">
            <h3>{{ q.label }}</h3>
            <p v-if="q.multi">You can select more than one answer!</p>
            <div class="buttons">
                <button v-for="a of defender.answers[q.ref]" :key="a" :class="[(a.status) ? 'is-info' : '', 'button']" @click="defender.response(a, q.ref, q.multi,a.id)">{{ a.label }}</button>
            </div>
        </div>
    </div>
        <div class="is-centered buttons">
            <button v-if="defender.sections.current > 0" @click="defender.updateSection('prev')" class="button is-large is-primary">
                <span class="icon is-title">
                    <i class="material-icons">navigate_before</i>
                </span>
            </button>
            <button v-if="defender.sections.current < defender.totalSections -1" @click="defender.updateSection('next')" class="button is-large is-primary">
                <span class="icon is-large">
                    <i class="material-icons">navigate_next</i>
                </span>
            </button>
        </div>
</template>

<script setup>
import { useDefenderStore } from '@/store/defenderStore';

const defender = useDefenderStore();

</script>

<style lang="scss">
.header {
    padding: 10px 10px 10px 30px;
}

</style>