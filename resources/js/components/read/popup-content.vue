<template>
  <div class="pop">
    <a :href="'/events/' + data.slug">
        <div 
        class="back" 
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