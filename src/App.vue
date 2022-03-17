<script setup lang="ts">
import { ref } from 'vue';
import VNativeDialog from './components/VNativeDialog.vue';

const open = ref(false);
const open2 = ref(false);
const open3 = ref(false);
const open4 = ref(false);
</script>

<template>
  <v-native-dialog
    inline
    :open="open"
  >
    <p>This is a native dialog with a vue wrapper</p>

    <button @click="open=false">
      Close
    </button>
  </v-native-dialog>

  <div>
    <button @click="open=true">
      Open inline dialog
    </button>
  </div>

  <v-native-dialog
    :open="open2"
  >
    <p>This is a native dialog with a backdrop</p>

    <button @click="open2=false">
      Close
    </button>
  </v-native-dialog>

  <div>
    <button @click="open2=true">
      Open dialog with backdrop
    </button>
  </div>

  <v-native-dialog
    :open="open3"
  >
    <p>This is a native dialog with another dialog inside</p>

    <button @click="open3=false">
      Close
    </button>

    <button @click="open4=true">
      Open embed dialog
    </button>

    <v-native-dialog
      :open="open4"
    >
      <p>The other one</p>

      <button @click="open4=false">
        Close
      </button>
    </v-native-dialog>
  </v-native-dialog>

  <div>
    <button @click="open3=true">
      Open dialog with another inside
    </button>
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
