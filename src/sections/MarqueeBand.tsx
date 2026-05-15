import { motion } from 'framer-motion';

const items = [
  'Brand Identity', '✦', 'Product Creatives', '◆', 'Social Campaigns', '✦',
  'Packaging Design', '◆', 'Ad Creatives', '✦', 'Brand Enhancement', '◆',
  'Brand Identity', '✦', 'Product Creatives', '◆', 'Social Campaigns', '✦',
  'Packaging Design', '◆', 'Ad Creatives', '✦', 'Brand Enhancement', '◆',
];

interface Props {
  direction?: 'left' | 'right';
  accent?: boolean;
}

export default function MarqueeBand({ direction = 'left', accent = false }: Props) {
  return (
    <div className={`relative overflow-hidden py-4 border-y ${accent ? 'border-arsenal-gold/10 bg-arsenal-gold/3' : 'border-white/5'}`}>
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: direction === 'left' ? [0, '-50%'] : ['-50%', 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className={`text-sm tracking-[0.25em] uppercase font-mono flex-shrink-0 ${
              item === '✦' || item === '◆'
                ? accent ? 'text-arsenal-gold' : 'text-arsenal-accent'
                : accent ? 'text-arsenal-gold/50' : 'text-white/20'
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
