'use client';

import { memo, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';

interface AwardItem {
  id: number;
  title: string;
  description: string;
  image: string;
  badge: string;
}

const AWARDS: AwardItem[] = [
  {
    id: 1,
    title: 'SWE 1st Runner-Up',
    description: 'Excellence in software engineering and innovative problem-solving at the CSE Project Show United International University.',
    image: '/SWE_1st_RunnerUP.PNG',
    badge: '🥈 1st Runner-Up',
  },
  {
    id: 2,
    title: 'FYDP-1 2nd Runner-Up',
    description: 'Outstanding achievement in Final Year Design Project competition for innovative engineering.',
    image: '/FYDP-1.PNG',
    badge: '🥉 2nd Runner-Up',
  },
  {
    id: 3,
    title: 'Hackathon Winner',
    description: 'First place winner in 48-hour hackathon competition for innovative solution development.',
    image: '/Hackathon.jpg',
    badge: '👑 Judges Choice',
  },
  {
    id: 4,
    title: 'Coming Soon',
    description: 'More exciting achievements and projects coming soon. Stay tuned for updates!',
    image: '',
    badge: '⏳ Coming Soon',
  },
  {
    id: 5,
    title: 'Coming Soon',
    description: 'More exciting achievements and projects coming soon. Stay tuned for updates!',
    image: '',
    badge: '⏳ Coming Soon',
  },
  {
    id: 6,
    title: 'Coming Soon',
    description: 'More exciting achievements and projects coming soon. Stay tuned for updates!',
    image: '',
    badge: '⏳ Coming Soon',
  },
];

interface CarouselCardProps {
  award: AwardItem;
}

const CarouselCard = memo(({ award }: CarouselCardProps) => (
  <motion.div
    className="relative shrink-0 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
    style={{ width: 'clamp(280px, 100%, 380px)' }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    {/* Image */}
    {award.image && (
      <img
        src={award.image}
        alt={award.title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
    )}

    {/* Gradient Overlay - Dark gradient top to bottom for text legibility */}
    <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-transparent" />

    {/* Badge - Top Left Corner */}
    <div className="absolute top-0 left-0 p-4 sm:p-5 md:p-6 z-10">
      <span className="inline-flex items-center gap-2 px-3 py-2 bg-linear-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full whitespace-nowrap">
        <Award size={16} />
        {award.badge}
      </span>
    </div>

    {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6 text-white">
      {/* Title */}
      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 line-clamp-2 leading-tight">
        {award.title}
      </h3>

      {/* Description */}
      <p className="text-xs md:text-sm text-gray-200 line-clamp-2">
        {award.description}
      </p>
    </div>
  </motion.div>
));

CarouselCard.displayName = 'CarouselCard';

export const ProjectShowcase = memo(function ProjectShowcase() {
  const [currentAchievementIndex, setCurrentAchievementIndex] = useState(0);
  const [currentAwardsIndex, setCurrentAwardsIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Update cards per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentAchievement = AWARDS[currentAchievementIndex];
  const totalAwardsSlides = Math.max(0, AWARDS.length - cardsPerView + 1);

  const handleNextAchievement = () => {
    setCurrentAchievementIndex((prev) => (prev + 1) % AWARDS.length);
  };

  const handlePrevAchievement = () => {
    setCurrentAchievementIndex((prev) => (prev - 1 + AWARDS.length) % AWARDS.length);
  };

  const handleNextAwards = () => {
    setCurrentAwardsIndex((prev) => (prev + 1) % totalAwardsSlides);
  };

  const handlePrevAwards = () => {
    setCurrentAwardsIndex((prev) => (prev - 1 + totalAwardsSlides) % totalAwardsSlides);
  };

  const handleGoToAwards = (index: number) => {
    setCurrentAwardsIndex(index);
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-14 md:mb-16 text-center"
        >
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-purple-600/50 bg-purple-900/20 text-slate-100 font-medium text-sm md:text-base tracking-wide">
              Award Winning
            </span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-linear-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">
            Award-Winning Showcase
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore my achievements and award-winning projects
          </p>
        </motion.div>

        {/* Featured Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Award className="text-yellow-500" size={28} />
              Featured Achievement
            </h3>
          </div>

          {/* Featured Achievement Card */}
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative w-full aspect-video md:h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-linear-to-br from-purple-600 to-blue-600"
            >
              {/* Background Image */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={currentAchievement.image}
                  alt={currentAchievement.title}
                  className="w-full h-full object-cover object-center opacity-80"
                />
              </motion.div>

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content Overlay */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10 text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Badge */}
                <div className="mb-2">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full whitespace-nowrap">
                    <Award size={16} />
                    {currentAchievement.badge}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 leading-tight">
                  {currentAchievement.title}
                </h2>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-100 line-clamp-2">
                  {currentAchievement.description}
                </p>
              </motion.div>
            </motion.div>

            {/* Navigation Arrows for Featured */}
            {AWARDS.length > 1 && (
              <>
                <motion.button
                  onClick={handlePrevAchievement}
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:bg-purple-600 hover:text-white transition-all"
                >
                  <ChevronLeft size={24} />
                </motion.button>

                <motion.button
                  onClick={handleNextAchievement}
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:bg-purple-600 hover:text-white transition-all"
                >
                  <ChevronRight size={24} />
                </motion.button>
              </>
            )}
          </div>

          {/* Dots Navigation for Featured */}
          {AWARDS.length > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center gap-3 mt-8"
            >
              {AWARDS.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentAchievementIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    width: index === currentAchievementIndex ? 32 : 12,
                    backgroundColor: index === currentAchievementIndex ? '#a855f7' : '#d1d5db',
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-3 rounded-full dark:bg-slate-600"
                />
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* All Achievements Horizontal Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            All Achievements
          </h3>

          {/* Carousel Container */}
          <div className="relative mb-8">
            {/* Cards Container */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-3 sm:gap-4 md:gap-6"
                animate={{ x: -currentAwardsIndex * (100 / cardsPerView) + '%' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                style={{
                  width: '100%',
                }}
              >
                {AWARDS.map((award) => (
                  <div
                    key={award.id}
                    className="shrink-0"
                    style={{
                      width: `${100 / cardsPerView}%`,
                      minWidth: 0,
                    }}
                  >
                    <CarouselCard award={award} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Left Arrow */}
            {totalAwardsSlides > 1 && (
              <motion.button
                onClick={handlePrevAwards}
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block absolute -left-6 md:-left-8 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-colors duration-200"
              >
                <ChevronLeft size={20} className="md:w-6 md:h-6" />
              </motion.button>
            )}

            {/* Right Arrow */}
            {totalAwardsSlides > 1 && (
              <motion.button
                onClick={handleNextAwards}
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block absolute -right-6 md:-right-8 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-colors duration-200"
              >
                <ChevronRight size={20} className="md:w-6 md:h-6" />
              </motion.button>
            )}
          </div>

          {/* Dot Indicators for All Achievements */}
          {totalAwardsSlides > 1 && (
            <motion.div
              className="flex justify-center gap-2 md:gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {Array.from({ length: totalAwardsSlides }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleGoToAwards(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    width: index === currentAwardsIndex ? 32 : 12,
                    backgroundColor: index === currentAwardsIndex ? '#a855f7' : '#d1d5db',
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-3 rounded-full dark:bg-slate-600"
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
});

ProjectShowcase.displayName = 'ProjectShowcase';
