import TipDetailLayout from "@/components/TipDetailLayout";

const Mindfulness = () => (
  <TipDetailLayout
    title="Mindfulness"
    whyItHelps="Anxiety often focuses on future fears. Mindfulness brings your attention back to the present moment."
    whatYouCanDo={[
      "Notice 5 things you can see",
      "Notice 4 things you can feel",
      "Notice 3 things you can hear",
      "Take one slow breath",
    ]}
  />
);

export default Mindfulness;
