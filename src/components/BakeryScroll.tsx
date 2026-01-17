'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

// Configuration
const TOTAL_FRAMES = 120;
const FRAME_PATH = '/frames/ezgif-frame-';

// Text overlay data - Luna's Bakehouse story
const textOverlays = [
  {
    id: 'hero',
    scrollStart: 0,
    scrollEnd: 0.20,
    alignment: 'center' as const,
    title: "Luna's Bakehouse",
    subtitle: "Small Batch. Big Heart.",
    isHero: true,
  },
  {
    id: 'flour',
    scrollStart: 0.25,
    scrollEnd: 0.42,
    alignment: 'left' as const,
    title: "100% Organic Flour",
    subtitle: "Stone-milled from heritage grains grown in Devon's regenerative farms.",
  },
  {
    id: 'fermentation',
    scrollStart: 0.48,
    scrollEnd: 0.68,
    alignment: 'right' as const,
    title: "24-Hour Slow Fermentation",
    subtitle: "Wild yeast cultures create complex flavors and easier digestion.",
  },
  {
    id: 'cta',
    scrollStart: 0.75,
    scrollEnd: 1,
    alignment: 'center' as const,
    title: "Taste the Warmth",
    subtitle: "Visit us in Dartington or Totnes",
    hasCta: true,
    ctaText: "Order Pickup",
  },
];

// Helper to pad frame number
const getFramePath = (frameIndex: number): string => {
  const paddedIndex = String(Math.min(Math.max(frameIndex + 1, 1), TOTAL_FRAMES)).padStart(3, '0');
  return `${FRAME_PATH}${paddedIndex}.jpg`;
};

// Text Overlay Component
interface TextOverlayProps {
  overlay: typeof textOverlays[0];
  scrollProgress: MotionValue<number>;
  onCtaHover: (isHovered: boolean) => void;
}

function TextOverlay({ overlay, scrollProgress, onCtaHover }: TextOverlayProps) {
  const opacity = useTransform(
    scrollProgress,
    [
      overlay.scrollStart,
      overlay.scrollStart + 0.05,
      overlay.scrollEnd - 0.05,
      overlay.scrollEnd,
    ],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollProgress,
    [overlay.scrollStart, overlay.scrollStart + 0.08],
    [30, 0]
  );

  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  const alignmentClasses = {
    center: 'left-1/2 -translate-x-1/2 text-center',
    left: 'left-[5%] md:left-[8%] text-left',
    right: 'right-[5%] md:right-[8%] text-right',
  };

  return (
    <motion.div
      className={`absolute top-1/2 -translate-y-1/2 z-10 max-w-[90%] sm:max-w-md md:max-w-lg px-6 sm:px-8 py-6 sm:py-8 rounded-2xl ${alignmentClasses[overlay.alignment]}`}
      style={{
        opacity,
        y: springY,
        background: 'rgba(0, 0, 0, 0.45)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
      }}
    >
      {overlay.isHero ? (
        <>
          <motion.h1
            className="font-serif mb-3 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium"
            style={{
              color: '#FFF8F0',
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.5), 0 4px 40px rgba(0, 0, 0, 0.3)'
            }}
          >
            {overlay.title}
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-light tracking-wide"
            style={{
              color: '#E8DDD4',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)'
            }}
          >
            {overlay.subtitle}
          </motion.p>
        </>
      ) : (
        <>
          <motion.h2
            className="font-serif mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium"
            style={{
              color: '#FFF8F0',
              textShadow: '0 2px 15px rgba(0, 0, 0, 0.5), 0 4px 30px rgba(0, 0, 0, 0.3)'
            }}
          >
            {overlay.title}
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg leading-relaxed max-w-sm"
            style={{
              color: '#E8DDD4',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
            }}
          >
            {overlay.subtitle}
          </motion.p>
        </>
      )}

      {overlay.hasCta && (
        <motion.a
          href="#locations"
          className="cta-button mt-8 inline-block"
          style={{ opacity }}
          onMouseEnter={() => onCtaHover(true)}
          onMouseLeave={() => onCtaHover(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {overlay.ctaText}
        </motion.a>
      )}
    </motion.div>
  );
}

// Scroll Canvas Component - renders after images are loaded
function ScrollCanvas({ images }: { images: HTMLImageElement[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const [isCtaHovered, setIsCtaHovered] = useState(false);

  // Scroll progress - uses container ref after it's mounted
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth spring for organic "dough-kneading" feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 35,
    damping: 30,
    mass: 1,
  });

  // Map progress to frame index
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Draw frame to canvas
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = images[index];
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Update canvas dimensions
    const targetWidth = Math.floor(width * dpr);
    const targetHeight = Math.floor(height * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Background matches image sequence
    ctx.fillStyle = '#F2EEE9';
    ctx.fillRect(0, 0, width, height);

    if (!img || !img.complete || img.naturalWidth === 0) return;

    // object-fit: cover behavior - fills entire viewport
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = width / height;

    let drawWidth, drawHeight, drawX, drawY;

    if (canvasAspect > imgAspect) {
      // Canvas is wider than image - scale to width
      drawWidth = width;
      drawHeight = width / imgAspect;
      drawX = 0;
      drawY = (height - drawHeight) / 2;
    } else {
      // Canvas is taller than image - scale to height
      drawHeight = height;
      drawWidth = height * imgAspect;
      drawX = (width - drawWidth) / 2;
      drawY = 0;
    }

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }, [images]);

  // Subscribe to frame changes
  useEffect(() => {
    if (images.length === 0) return;

    const unsubscribe = frameIndex.on('change', (latest) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const index = Math.round(latest);
        drawFrame(index);
      });
    });

    // Draw initial frame
    drawFrame(0);

    // Handle resize
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const currentFrame = Math.round(frameIndex.get());
        drawFrame(currentFrame);
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      clearTimeout(resizeTimeout);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [images, frameIndex, drawFrame]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Main Scroll Container - 400vh for luxurious scroll */}
      <div
        ref={containerRef}
        className="scroll-container"
        style={{ height: '400vh' }}
      >
        {/* Sticky Canvas Wrapper */}
        <div className="canvas-sticky">
          <canvas
            ref={canvasRef}
            className="bakery-canvas"
          />

          {/* Text Overlays */}
          {textOverlays.map((overlay) => (
            <TextOverlay
              key={overlay.id}
              overlay={overlay}
              scrollProgress={scrollYProgress}
              onCtaHover={setIsCtaHovered}
            />
          ))}
        </div>
      </div>
    </>
  );
}

// Main BakeryScroll Component
export default function BakeryScroll() {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Preload all images
  useEffect(() => {
    if (!isMounted) return;

    const loadedImages: HTMLImageElement[] = [];
    let loadedCounter = 0;

    const loadImage = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          loadedCounter++;
          setLoadedCount(loadedCounter);
          resolve();
        };
        img.onerror = () => {
          console.warn(`Failed to load frame ${index}`);
          loadedCounter++;
          setLoadedCount(loadedCounter);
          resolve();
        };
        img.src = getFramePath(index);
        loadedImages[index] = img;
      });
    };

    const loadAllImages = async () => {
      const batchSize = 10;
      for (let i = 0; i < TOTAL_FRAMES; i += batchSize) {
        const batch = [];
        for (let j = i; j < Math.min(i + batchSize, TOTAL_FRAMES); j++) {
          batch.push(loadImage(j));
        }
        await Promise.all(batch);
      }
      setImages(loadedImages);
      setIsLoading(false);
    };

    loadAllImages();
  }, [isMounted]);

  // Loading Screen
  if (!isMounted || isLoading) {
    const progress = Math.round((loadedCount / TOTAL_FRAMES) * 100);

    return (
      <div className="loading-container">
        <div className="loading-spinner" />
        <p className="loading-text">Preparing the bakery...</p>
        <p className="loading-progress">{isMounted ? `${progress}% loaded` : 'Initializing...'}</p>
      </div>
    );
  }

  // Only render scroll canvas after fully mounted and images loaded
  // This pattern avoids the "Target ref is defined but not hydrated" error
  return <ScrollCanvas images={images} />;
}
