import { defineComponent, onMounted } from 'vue';
import { initChallenges } from 'botbye-client';
import { WITH_INTERNAL_OPTIONS } from "./constants";
const botByeComponentProps = {
    clientKey: { type: String, required: true },
    api: { type: String, required: false },
    withoutSessions: { type: Boolean, required: false },
};
export const BotByeComponent = defineComponent({
    props: botByeComponentProps,
    setup(props) {
        onMounted(() => {
            initChallenges({
                ...props,
                ...WITH_INTERNAL_OPTIONS
            });
        });
        return () => null;
    },
});
export default BotByeComponent;
