import { useNavigate } from "react-router-dom";
import { Heart, Wind, Eye, Dumbbell, MessageCircleHeart, ChevronRight } from "lucide-react";

const tips = [
  {
    id: "seek-support",
    title: "Seek Support",
    preview: "Talk to someone you trust to gain reassurance and perspective.",
    icon: Heart,
    bgClass: "bg-icon-1",
  },
  {
    id: "deep-breathing",
    title: "Deep Breathing",
    preview: "Slow breathing can calm your nervous system quickly.",
    icon: Wind,
    bgClass: "bg-icon-2",
  },
  {
    id: "mindfulness",
    title: "Mindfulness",
    preview: "Focus on the present moment without judgment.",
    icon: Eye,
    bgClass: "bg-icon-3",
  },
  {
    id: "muscle-relaxation",
    title: "Progressive Muscle Relaxation",
    preview: "Release physical tension to ease anxiety.",
    icon: Dumbbell,
    bgClass: "bg-icon-4",
  },
  {
    id: "positive-self-talk",
    title: "Positive Self-Talk",
    preview: "Replace anxious thoughts with realistic, calming statements.",
    icon: MessageCircleHeart,
    bgClass: "bg-icon-5",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-calm">
      <div className="max-w-md mx-auto px-5 py-8 pb-12">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <p className="text-muted-foreground text-sm font-semibold mb-1">Slow down 💙</p>
          <h1 className="text-3xl font-extrabold text-foreground leading-tight">
            Calm Your Anxiety
          </h1>
          <p className="text-muted-foreground mt-2 text-base leading-relaxed">
            Simple techniques to help you feel grounded and safe.
          </p>
        </div>

        {/* Section Title */}
        <h2 className="text-lg font-bold text-foreground mb-4">Anxiety Relief Tips</h2>

        {/* Tip Cards */}
        <div className="flex flex-col gap-3">
          {tips.map((tip, i) => (
            <div
              key={tip.id}
              className="tip-card animate-fade-in"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
              onClick={() => navigate(`/tip/${tip.id}`)}
            >
              <div className={`${tip.bgClass} w-12 h-12 rounded-full flex items-center justify-center shrink-0`}>
                <tip.icon className="w-5 h-5 text-foreground/70" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-foreground text-[15px] leading-snug">{tip.title}</p>
                <p className="text-muted-foreground text-sm leading-snug mt-0.5 line-clamp-2">{tip.preview}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
            </div>
          ))}
        </div>

        {/* Bottom Support */}
        <p className="text-center text-muted-foreground text-xs mt-8 px-4 leading-relaxed">
          If anxiety feels overwhelming or persistent, consider speaking with a mental health professional.
        </p>
      </div>
    </div>
  );
};

export default Index;
