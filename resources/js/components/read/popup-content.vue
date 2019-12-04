<template>
  <div class="popup-content">
    <a :href="'/events/' + data.slug">
        <div 
        class="grid-background-image" 
        :style="{ backgroundImage: `url('${data ? /storage/ + data.thumbImagePath : ''}')` }">
        </div>
        <div class="info">
            <div class="name">
                {{ data.name }}
            </div>
            <div class="price">
                {{data.price_range}}
            </div>
        </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "PopupContent",
  props: {
    data: {
      type: Object,
    }
  }
};
</script>