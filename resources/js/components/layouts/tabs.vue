<template>
    <div>
        <div class="tab-section" role="tablist">
            <div
                v-for="(tab, index) in tabs"
                class="tab"
                :class="{ 'tab-active': tab.isActive }"
                :style="tab.isActive ? 'margin-bottom: -1px' : ''"
            >
                <button
                    v-text="tab.title"
                    :class="{ 'font-bold': tab.isActive }"
                    class="focus:outline-none"
                    role="tab"
                    :aria-selected="tab.isActive"
                    @click="activeTab = tab"
                ></button>
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
            activeTab: null
        };
    },
    mounted() {
        this.tabs = this.$children;
        this.setInitialActiveTab();
    },
    watch: {
        activeTab(activeTab) {
            this.tabs.map(tab => (tab.isActive = tab == activeTab));
        }
    },
    methods: {
        setInitialActiveTab() {
            this.activeTab = this.tabs.find(tab => tab.active) || this.tabs[0];
        }
    }
};
</script>