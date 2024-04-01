<template>
    <h2 class="title is-4">Our Recommendations</h2>
    <div class="box">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title"><icon class="material-icons">flash_on</icon>Immediate Changes</p>
            </header>
            <div class="card-content">
                <div class="content" v-for="r of report.rep.immediate" :key="r.index">
                    <h5>{{ r.title }}</h5>
                    <p>{{ r.desc }}</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <p class="card-header-title"><icon class="material-icons">pending_actions</icon>Short Term Changes</p>
            </div>
            <div class="card-content">
                <div class="content" v-for="r of report.rep.short" :key="r.index">
                    <h5>{{ r.title }}</h5>
                    <p>{{ r.desc }}</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <p class="card-header-title"><icon class="material-icons">event_note</icon>Long Term Changes</p>
            </div>
            <div class="card-content">
                <div class="content">
                    <div class="content" v-for="r of report.rep.long" :key="r.index">
                        <h5>{{ r.title }}</h5>
                        <p>{{ r.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useReportStore } from '@/store/reportStore';

const report = useReportStore();

</script>

<style lang="scss">
icon {
    padding-right: 10px;
}

</style>