<template>
  <dialog
    ref="dialog"
    class="v-native-dialog"
    :class="class"
  >
    <slot />
  </dialog>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';

const dialog = ref(null);
const internalOpen = ref(false);

const props = defineProps({
  open: Boolean,
  inline: Boolean,
  class: null,
});

function openCloseDialog() {
  if (props.open) dialog.value.show();
  else dialog.value.close();
}

function showHideDialog() {
  if (props.open) dialog.value.showModal();
  else dialog.value.close();
}

watchEffect(() => {
  if (props.open !== internalOpen.value) {
    if (props.inline) openCloseDialog();
    else showHideDialog();

    internalOpen.value = props.open;
  }
});

</script>

<style>
</style>
