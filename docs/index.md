# Vue Native Dialog

A wrapper arround browser is `<dialog>` tag
Read more about this new tag [here](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/dialog#browser_compatibility)

## Install

Install as: `vue-native-dialog`
_npm_:
`npm install vue-native-dialog`

_yarn_:
`yarn add vue-native-dialog`

## Usage

Import as:

```js
import { VNativeDialog } from "vue-native-dialog";
```

## Props

All the native dialog proprieties are passed to the parent using `v-bind="attrs"` but those bellow are computed internally

| name   | type    | default | description                      |
| ------ | ------- | ------- | -------------------------------- |
| open   | boolean | false   | defines if the dialog is open    |
| inline | boolean | false   | should show the dialog as inline |

## Events

All the native dialog events are passed to the parent using `v-bind="attrs"`

## Examples

### Inline dialog

Creates a `dialog` component where it's declared, useful for inline questions and confirmation
_Example:_

<v-native-dialog inline :open="open" style="z-index: 9">
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

```vue
<v-native-dialog inline :open="open">
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
```

```typescript
import { ref } from "vue";

const open = ref(false);
```

### Backdrop dialog

Creates a `dialog` component over all the html with a backdrop behind.
_Example:_

<v-native-dialog :open="open2" style="z-index: 9">
 <p>This is a native dialog with a vue wrapper and a backdrop behind</p>
 <button @click="open2=false">
   Close
  </button>
</v-native-dialog>

<div>
    <button @click="open2=true">
        Open dialog
    </button>
</div>

```vue
<v-native-dialog :open="open">
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
const open = ref(false);
```

```typescript
import { ref } from "vue";

const open = ref(false);
```

### Dialog inside another dialog

You can define dialogs inside another dialog.
_Example:_

<v-native-dialog :open="open3">
 <p>This is a native dialog with another dialog inside</p>
 <button @click="open3=false">
     Close
 </button>
 <button @click="open4=true">
     Open embed dialog
 </button>
 <v-native-dialog :open="open4">
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

```vue
  <v-native-dialog
    :open="open"
  >
    <p>This is a native dialog with another dialog inside</p>

    <button @click="open=false">
      Close
    </button>

    <button @click="open2=true">
      Open embed dialog
    </button>

    <v-native-dialog
      :open="open2"
    >
      <p>The other one</p>

      <button @click="open2=false">
        Close
      </button>
    </v-native-dialog>
  </v-native-dialog>

  <div>
    <button @click="open=true">
      Open dialog with another inside
    </button>
  </div>
```

```typescript
import { ref } from "vue";

const open = ref(false);
const open2 = ref(false);
```

## Github

https://github.com/algoz098/vue-native-dialog

<script setup>
import VNativeDialog from '../src/components/VNativeDialog.vue'
import { ref } from 'vue';

const open = ref(false);
const open2 = ref(false);
const open3 = ref(false);
const open4 = ref(false);
</script>
