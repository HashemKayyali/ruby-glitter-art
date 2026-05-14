import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Crown, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

type PricingPackage = {
  name: string;
  badge?: string;
  price: string;
  currency: string;
  bestFor: string;
  features: string[];
  cta: string;
};

type PricingCategory = {
  id: string;
  label: string;
  description: string;
  packages: PricingPackage[];
};

const pricingCategories: PricingCategory[] = [
  {
    id: 'event-activation',
    label: 'Event Activation',
    description:
      'Time-based glitter art activation for birthdays, lounges, restaurants, pop-ups, themed nights, and brand events.',
    packages: [
      {
        name: 'Weekday Event',
        badge: 'Starter',
        price: '80',
        currency: 'JOD',
        bestFor: 'Sunday-Wednesday',
        features: [
          'Glitter art station',
          'Glitter colors and designs',
          'Activation-style guest service',
          'Ideal for ladies nights and small events',
          'Time-based service',
        ],
        cta: 'Book Event Activation',
      },
      {
        name: 'Weekend Event',
        badge: 'Most Popular',
        price: '120',
        currency: 'JOD',
        bestFor: 'Thursday-Friday',
        features: [
          'Glitter art station',
          'Glitter colors and designs',
          'Activation-style guest service',
          'Ideal for busy venue nights',
          'Time-based service',
        ],
        cta: 'Book Event Activation',
      },
      {
        name: 'Extra Hour',
        badge: 'Add-On',
        price: '25',
        currency: 'JOD',
        bestFor: 'Add more time',
        features: [
          'Available upon request',
          'Recommended for high-traffic events',
          'Helps serve more guests',
          'Can be added to weekday or weekend bookings',
          'Subject to availability',
        ],
        cta: 'Add Extra Hour',
      },
    ],
  },
  {
    id: 'glitter-art',
    label: 'Wedding Glitter',
    description:
      'Our signature glitter art service for weddings, engagements, and elegant private celebrations.',
    packages: [
      {
        name: 'Sparkle Basic',
        price: '120',
        currency: 'JOD',
        bestFor: '60-80 guests',
        features: [
          'Glitter art for guests',
          'Glitter station setup',
          'Curated glitter colors',
          'Elegant event-friendly designs',
        ],
        cta: 'Book This Package',
      },
      {
        name: 'Glitter Glow',
        badge: 'Most Popular',
        price: '160',
        currency: 'JOD',
        bestFor: '81-120 guests',
        features: [
          'Glitter art for guests',
          'Glitter station setup',
          'Curated glitter colors',
          'Elegant event-friendly designs',
        ],
        cta: 'Book This Package',
      },
      {
        name: 'Full Glitter Experience',
        badge: 'Best Value',
        price: '200',
        currency: 'JOD',
        bestFor: '121-160 guests',
        features: [
          'Glitter art for guests',
          'Glitter station setup',
          'Curated glitter colors',
          'Elegant event-friendly designs',
        ],
        cta: 'Book This Package',
      },
    ],
  },
  {
    id: 'glow-glitter',
    label: 'Wedding Glow',
    description:
      'A wedding glitter experience with glow bracelets and glow sticks for a more interactive evening reception.',
    packages: [
      {
        name: 'Sparkle Glow',
        price: '150',
        currency: 'JOD',
        bestFor: '60-80 guests',
        features: [
          'Glitter art for guests',
          'Glitter station setup',
          'Curated glitter colors',
          'One glow bracelet per guest',
          'One glow stick per guest',
        ],
        cta: 'Book This Package',
      },
      {
        name: 'Glow Plus',
        badge: 'Most Popular',
        price: '200',
        currency: 'JOD',
        bestFor: '81-120 guests',
        features: [
          'Glitter art for guests',
          'Glitter station setup',
          'Curated glitter colors',
          'One glow bracelet per guest',
          'One glow stick per guest',
        ],
        cta: 'Book This Package',
      },
      {
        name: 'Full Glow Experience',
        badge: 'Best Value',
        price: '245',
        currency: 'JOD',
        bestFor: '121-160 guests',
        features: [
          'Glitter art for guests',
          'Glitter station setup',
          'Curated glitter colors',
          'One glow bracelet per guest',
          'One glow stick per guest',
        ],
        cta: 'Book This Package',
      },
    ],
  },
];

const packageNotes =
  'Prices are based on the selected package or event activation rate. Guest-count packages apply to the stated guest range. Extra guests are charged separately. Event activation pricing is time-based, not guest-count-based. Guests are served on a first-come, first-served basis during the activation time. Final booking is confirmed based on event date, location, availability, timing, and guest count.';

export const PricingSection = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(pricingCategories[0].id);

  const activeCategory = useMemo(
    () =>
      pricingCategories.find((category) => category.id === activeCategoryId) ??
      pricingCategories[0],
    [activeCategoryId]
  );

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-slate-950 py-12 text-white sm:py-16 lg:py-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,1),rgba(39,17,39,0.98)_42%,rgba(78,37,57,0.94)_68%,rgba(15,23,42,1))] pointer-events-none" />
      <div className="absolute inset-0 bg-confetti opacity-20 mix-blend-screen pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[36rem] flex-col items-center gap-2.5 text-center sm:max-w-3xl sm:gap-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="ornament-line max-w-full [&::after]:w-6 [&::before]:w-6 sm:[&::after]:w-[38px] sm:[&::before]:w-[38px]"
          >
            <span className="font-script text-xl leading-none tracking-wide text-pink-200 sm:text-3xl">
              premium sparkle experiences
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-heading text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl md:leading-tight"
          >
            Packages & Pricing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto max-w-[34rem] px-1 text-sm leading-7 text-pink-50/85 sm:max-w-2xl sm:text-lg md:text-xl"
          >
            Choose the perfect Ruby Glitter Art experience for weddings, birthdays,
            lounge nights, restaurants, private celebrations, pop-ups, and
            unforgettable events.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mx-auto mt-6 flex w-full max-w-3xl flex-col gap-2 rounded-[22px] border border-white/15 bg-white/10 p-1.5 shadow-2xl shadow-pink-950/30 backdrop-blur-xl sm:mt-9 sm:flex-row sm:rounded-full sm:p-2"
          role="tablist"
          aria-label="Pricing categories"
        >
          {pricingCategories.map((category) => {
            const isActive = category.id === activeCategory.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${category.id}-panel`}
                onClick={() => setActiveCategoryId(category.id)}
                className={cn(
                  'relative min-h-[46px] w-full flex-1 rounded-full px-4 py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:min-h-[48px] sm:px-5 sm:py-3 lg:text-sm lg:tracking-widest',
                  isActive
                    ? 'bg-gradient-to-r from-pink-200 via-amber-100 to-violet-200 text-slate-950 shadow-lg shadow-pink-500/25'
                    : 'text-pink-50/75 hover:bg-white/10 hover:text-white'
                )}
              >
                {category.label}
              </button>
            );
          })}
        </motion.div>

        <motion.p
          key={`${activeCategory.id}-description`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mx-auto mt-4 max-w-[40rem] px-1 text-center text-sm font-medium leading-6 text-pink-50/75 sm:mt-6 sm:text-base"
        >
          {activeCategory.description}
        </motion.p>

        <motion.div
          key={activeCategory.id}
          id={`${activeCategory.id}-panel`}
          role="tabpanel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-5 lg:grid-cols-3 lg:items-stretch"
        >
          {activeCategory.packages.map((pricingPackage, index) => {
            const isMostPopular = pricingPackage.badge === 'Most Popular';
            const isBestValue = pricingPackage.badge === 'Best Value';
            const Icon = isMostPopular ? Crown : Sparkles;

            return (
              <motion.article
                key={pricingPackage.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={cn(
                  'group relative flex min-h-full w-full min-w-0 flex-col overflow-hidden rounded-[24px] border bg-white/[0.08] p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 sm:rounded-[30px] sm:p-7',
                  isMostPopular
                    ? 'border-pink-200/70 shadow-pink-500/25 lg:-translate-y-2 lg:hover:-translate-y-3'
                    : 'border-white/15 shadow-slate-950/30 hover:border-pink-200/45',
                  isBestValue && 'border-amber-200/45 shadow-amber-500/15'
                )}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-300 via-amber-200 to-violet-300 opacity-80" />

                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-pink-100/60">
                        Package
                      </p>
                      <h3 className="font-heading text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl">
                        {pricingPackage.name}
                      </h3>
                    </div>

                    {pricingPackage.badge && (
                      <span
                        className={cn(
                          'inline-flex max-w-full shrink-0 self-start whitespace-nowrap rounded-full border px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest',
                          isMostPopular
                            ? 'border-pink-100/70 bg-pink-200 text-slate-950 shadow-lg shadow-pink-400/20'
                            : isBestValue
                              ? 'border-amber-200/60 bg-amber-100/95 text-amber-950'
                              : 'border-white/20 bg-white/10 text-pink-50'
                        )}
                      >
                        <Icon className="h-3 w-3" />
                        {pricingPackage.badge}
                      </span>
                    )}
                  </div>

                  <div className="mb-5 sm:mb-6">
                    <div className="flex items-end gap-2">
                      <span className="font-heading text-[2.35rem] font-extrabold leading-none tracking-tight text-white sm:text-5xl">
                        {pricingPackage.price}
                      </span>
                      <span className="pb-0.5 text-sm font-bold uppercase tracking-widest text-amber-100 sm:pb-1">
                        {pricingPackage.currency}
                      </span>
                    </div>
                    <p className="mt-3 inline-flex w-fit max-w-full rounded-2xl border border-white/10 bg-white/10 px-3 py-1 text-[13px] font-semibold leading-snug text-pink-50/85 sm:text-sm">
                      Best for: {pricingPackage.bestFor}
                    </p>
                  </div>

                  <ul className="mb-6 flex flex-1 flex-col gap-2.5 sm:mb-7 sm:gap-3">
                    {pricingPackage.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm leading-6 text-pink-50/80">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-amber-200" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={cn(
                      'shine-overlay inline-flex min-h-[50px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 py-3 text-[13px] font-extrabold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:min-h-[48px] sm:px-5 sm:text-sm',
                      isMostPopular
                        ? 'bg-gradient-to-r from-pink-300 via-rose-200 to-amber-100 text-slate-950 shadow-lg shadow-pink-500/25 hover:shadow-pink-400/40'
                        : 'border border-white/20 bg-white/10 text-white hover:border-pink-200/60 hover:bg-white/16'
                    )}
                  >
                    {pricingPackage.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mt-6 rounded-[20px] border border-white/12 bg-white/[0.07] p-4 text-left text-[11px] font-medium leading-6 text-pink-50/70 shadow-xl shadow-slate-950/20 backdrop-blur-md sm:mt-8 sm:rounded-[24px] sm:p-5 sm:text-center sm:text-sm"
        >
          {packageNotes}
        </motion.div>
      </div>
    </section>
  );
};
