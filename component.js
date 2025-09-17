import { defineComponent, onMounted } from 'vue';
import { initChallenges } from 'botbye-client';
const botByeComponentProps = {
    clientKey: { type: String, required: true },
    api: { type: String, required: false },
    withoutSessions: { type: Boolean, required: false },
};
export const BotByeComponent = defineComponent({
    props: botByeComponentProps,
    setup(props) {
        onMounted(() => {
            initChallenges({ ...props });
        });
        return () => null;
    },
});
export default BotByeComponent;
