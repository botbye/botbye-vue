# @botbye/vue

[BotBye!](https://botbye.com) integration for [Vue](https://vuejs.org).

Full documentation: https://botbye.com/docs/client-side/vue

## Install

```bash
npm i @botbye/vue
```

or

```bash
yarn add @botbye/vue
```

## Configuration

There are two ways to configure BotBye! in Vue: `BotByeVuePlugin` or `BotByeComponent`

### BotByeVuePlugin

1. Init BotBye! using `BotByeVuePlugin`

#### `main.js`

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import { BotByeVuePlugin } from "@botbye/vue";

const botByeOptions = {
  // Use your client-key
  clientKey: "00000000-0000-0000-0000-000000000000"
};

const app = createApp(App)
app.use(BotByeVuePlugin, botByeOptions)
app.mount('#app')
```

### BotByeComponent

1. Init BotBye! using `BotByeComponent`

#### `App.vue`

```typescript
<script setup>
    import { BotByeComponent } from "@botbye/vue"

    /* Use your client-key */
    const clientKey="00000000-0000-0000-0000-000000000000";
</script>

<template>
    <BotByeComponent :client-key="clientKey"/>
    <header>
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>

    </header>

    <main>
        <!-- some code -->
    </main>
</template>
```

## Usage

To run challenge and generate BotBye! token call `runChallenge`. Send this token in any convenient way to the server.
   For example in `"x-botbye-token"` header:

```typescript
<script setup>
import { runChallenge } from "@botbye/vue";

async function handleSubmit() {
    const botByeToken = await runChallenge();

    const res = await $fetch("/api/login", {
        method: "POST",
        headers: {
            // "x-botbye-token" is an example — send this token in any convenient way.
            "x-botbye-token": botByeToken
        }
    })
}
</script>
```

## User identification

Call `setUserId` after a successful authentication to associate the current session with a user.
This helps BotBye detect multi-account abuse.

```typescript
<script setup>
import { setUserId } from "@botbye/vue";

const response = await login({ username, password });

if (response.userId) {
  setUserId(response.userId);
}
</script>
```
