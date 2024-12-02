import useScrollEffect from "../../hooks/useScrollEffect";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  animate?: boolean;
  visible?: number;
}

function Section({ className, children, animate, visible = 30 }: SectionProps) {
  const { ref: sectionRef, offsetY } = useScrollEffect();

  if (!animate) {
    return (
      <section
        className={`relative my-20 lg:my-25 lg:mb-30 bg-transparent text-black ${className}`}
      >
        {children}
      </section>
    );
  }

  const styles = {
    transform: `translateY(${offsetY}%)`,
    opacity: Math.max(1 - offsetY / visible, 0)
  };

  return (
    <section
      ref={sectionRef}
      style={styles}
      className={`relative my-20 lg:my-25 lg:mb-30 bg-transparent text-black ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
