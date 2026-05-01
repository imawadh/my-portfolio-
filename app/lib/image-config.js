/**
 * Image Optimization Configuration
 * Provides optimized Image component props for consistent performance
 */

export const imageOptimizationConfig = {
  // Profile images - highest priority
  profile: {
    priority: true,
    quality: 90,
    sizes: "(max-width: 768px) 128px, 160px",
  },

  // About section image
  about: {
    quality: 85,
    sizes: "(max-width: 768px) 288px, 320px",
  },

  // Project thumbnails - lazy loaded
  project: {
    loading: "lazy",
    quality: 80,
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  },

  // Blog post images
  blog: {
    loading: "lazy",
    quality: 85,
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 900px",
  },

  // SVG blur placeholder for consistent UI
  blurDataURL:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f3f4f6' width='400' height='300'/%3E%3C/svg%3E",
};

/**
 * Get optimized Image props based on context
 * @param {string} context - 'profile', 'about', 'project', 'blog'
 * @param {object} overrides - Additional props to override defaults
 * @returns {object} Optimized Image component props
 */
export function getImageProps(context = "project", overrides = {}) {
  const baseConfig = imageOptimizationConfig[context] || imageOptimizationConfig.project;
  return {
    ...baseConfig,
    placeholder: "blur",
    blurDataURL: imageOptimizationConfig.blurDataURL,
    ...overrides,
  };
}

/**
 * Image format optimization hints
 * For use with Next.js Image component
 * Automatically serves WebP/AVIF with fallbacks
 */
export const imageFormatHints = {
  avif: "image/avif",
  webp: "image/webp",
  jpg: "image/jpeg",
  png: "image/png",
};
