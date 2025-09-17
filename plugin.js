import { initChallenges } from 'botbye-client';
export const BotByeVuePlugin = {
    install(app, options) {
        initChallenges({
            api: options.api,
            clientKey: options.clientKey,
            withoutSessions: options.withoutSessions,
            withoutReload: options.withoutReload,
            withoutRemoteStorage: options.withoutRemoteStorage,
        });
    },
};
