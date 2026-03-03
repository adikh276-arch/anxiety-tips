import TipDetailLayout from "@/components/TipDetailLayout";

const PositiveSelfTalk = () => (
  <TipDetailLayout
    title="Positive Self-Talk"
    whyItHelps="Anxious thoughts often exaggerate danger. Balanced thinking reduces fear intensity."
    whatYouCanDo={[
      'Identify the anxious thought',
      'Ask: "Is this 100% true?"',
      "Look for evidence",
      "Replace it with a realistic statement",
    ]}
    extra={
      <div className="bg-card rounded-lg p-4 shadow-card animate-fade-in" style={{ animationDelay: "240ms", animationFillMode: "both" }}>
        <p className="text-sm text-muted-foreground mb-1 font-semibold">Example</p>
        <p className="text-foreground text-[15px] leading-relaxed">
          Instead of: <span className="italic text-destructive/70">"Something terrible will happen."</span>
        </p>
        <p className="text-foreground text-[15px] leading-relaxed mt-1">
          Try: <span className="font-bold text-primary">"I am safe right now."</span>
        </p>
      </div>
    }
  />
);

export default PositiveSelfTalk;
