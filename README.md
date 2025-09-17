# VueJS BotBye!

## Install

```bash 
npm i botbye-vue
```

```bash 
yarn add botbye-vue
```

## Usage with BotByeVuePlugin

1. Init BotBye! using `BotByeVuePlugin`

### `main.js`

```typescript jsx

import {createApp} from 'vue'
import App from './App.vue'
import {BotByeVuePlugin} from "botbye-vue";

const botByeOptions = {
    /* Use your client-key */
    clientKey: "00000000-0000-0000-0000-000000000000",
};

const app = createApp(App)
app.use(BotByeVuePlugin, botByeOptions)
app.mount('#app')

```

## Usage with BotByeComponent

1. Init BotBye! using `BotByeComponent`

### `App.vue`

```typescript jsx

<script setup>
    import {BotByeComponent} from "botbye-vue"
    /* Use your client-key */
    const clientKey="00000000-0000-0000-0000-000000000000";
</script>

<template>
    <BotByeComponent client-key="clientKey"/>
    <header>
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>

    </header>

    <main>
        <!-- some code -->
    </main>
</template>

```
