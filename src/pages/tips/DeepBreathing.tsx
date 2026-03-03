import TipDetailLayout from "@/components/TipDetailLayout";
import BreathingCircle from "@/components/BreathingCircle";

const DeepBreathing = () => (
  <TipDetailLayout
    title="Deep Breathing"
    whyItHelps="Anxiety activates the fight-or-flight response. Slow breathing signals safety to your brain and body."
    whatYouCanDo={[
      "Inhale through your nose for 4 seconds",
      "Hold for 4 seconds",
      "Exhale slowly for 6 seconds",
      "Repeat for 1–2 minutes",
    ]}
    extra={<BreathingCircle />}
  />
);

export default DeepBreathing;
