import { initChallenges } from 'botbye-client';
import { WITH_INTERNAL_OPTIONS } from "./constants";
export const BotByeVuePlugin = {
    install(app, options) {
        initChallenges({
            api: options.api,
            clientKey: options.clientKey,
            withoutSessions: options.withoutSessions,
            withoutReload: options.withoutReload,
            withoutRemoteStorage: options.withoutRemoteStorage,
            ...WITH_INTERNAL_OPTIONS
        });
    },
};
