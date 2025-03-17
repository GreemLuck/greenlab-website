import "./Animated.modules.css";
import { ReactNode, useEffect, useRef, useState } from "react";


type AnimationType = 'fade-up' | 'fade-left' | 'fade-right' | 'fade-down';

interface AnimatedProps {
    children: ReactNode;
    animation?: AnimationType;
    duration?: number;
    threshold?: number;
}

export function Animated({children, animation = 'fade-up', duration = 1500, threshold = 0.8 }: AnimatedProps) {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: threshold }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref}>
            <div className={animation + (visible ? " show" : "")} style={{transition: "all " + duration + "ms"}}>
                {children}
            </div>
        </div>
    )
}