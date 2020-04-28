<template>
    <div>
        <div class="tab" role="tablist">
            <div class="tabcontent">
                <div
                    v-for="(tab, index) in tabs"
                    class="ln"
                    :class="{ 'act': tab.isActive }"
                    :style="tab.isActive ? 'margin-bottom: -1px' : ''"
                >
                    <button        
                    :class="{ 'font-bold': tab.isActive }"
                    class="focus:outline-none"
                    role="tab"
                    :aria-selected="tab.isActive"
                    @click="activeTab = tab" >
                        <h2>{{tab.title}}</h2>
                    </button>
                    <div :class="{ 'active-dot': tab.notification }"></div>
                </div>
            </div>
        </div>

        <slot></slot>
    </div>
</template>

<script>
export default {

    data() {
        return {
            tabs: [],
            activeTab: null,

        };
    },
    mounted() {
        this.tabs = this.$children;
        this.setInitialActiveTab();
    },
    watch: {
        activeTab(activeTab) {
            this.tabs.map(tab => (tab.isActive = tab == activeTab));
            this.$emit('current', activeTab.id);
        }
    },
    methods: {
        setInitialActiveTab() {
            this.activeTab = this.tabs.find(tab => tab.active) || this.tabs[0];
        },
    }
};
</script>