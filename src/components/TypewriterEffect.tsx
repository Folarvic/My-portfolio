
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Word {
  text: string;
  className?: string;
}

interface TypewriterEffectProps {
  words: Word[];
  className?: string;
  cursorClassName?: string;
}

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName
}: TypewriterEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentWord = words[currentWordIndex].text;
    
    const typeSpeed = isDeleting ? 80 : 150;
    
    const timeout = setTimeout(() => {
      // If deleting
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        
        // If finished deleting
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }
      } else {
        // If typing
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        
        // If finished typing
        if (currentText.length === currentWord.length) {
          // Wait 2 seconds before deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      }
    }, typeSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);
  
  return (
    <div className={cn("flex items-center text-4xl font-bold", className)}>
      <span className="text-primary">{currentText}</span>
      <span className={cn("ml-1 inline-block h-8 w-[3px] animate-blink bg-primary", cursorClassName)}></span>
    </div>
  );
};
