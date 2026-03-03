import TipDetailLayout from "@/components/TipDetailLayout";

const MuscleRelaxation = () => (
  <TipDetailLayout
    title="Progressive Muscle Relaxation"
    whyItHelps="Anxiety creates physical tension. Releasing muscles sends calming signals to your brain."
    whatYouCanDo={[
      "Clench fists for 5 seconds",
      "Release slowly",
      "Shrug shoulders tightly",
      "Release",
      "Move from toes to head",
    ]}
  />
);

export default MuscleRelaxation;
