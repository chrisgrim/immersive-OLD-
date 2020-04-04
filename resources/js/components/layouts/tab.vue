<template>
    <div role="tabpanel" v-show="isActive" id="grid">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: {},
        active: { type: Boolean, default: false },
        id: {},
    },
    data() {
        return {
            isActive: this.active
        };
    }
};
</script>