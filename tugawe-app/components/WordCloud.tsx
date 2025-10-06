'use client'

const words = [
  { text: 'Fresh', size: 'text-2xl' },
  { text: 'Delicious', size: 'text-3xl' },
  { text: 'Friendly', size: 'text-xl' },
  { text: 'Crowded', size: 'text-lg' },
  { text: 'Slow', size: 'text-xl' },
  { text: 'Clean', size: 'text-2xl' },
  { text: 'Amazing', size: 'text-3xl' },
];

export default function WordCloud() {
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 min-h-full flex flex-col border border-white/10">
      <h3 className="text-white text-lg font-semibold mb-6">Word cloud</h3>
      
      <div className="flex-1 flex flex-wrap items-center justify-center gap-6 content-center">
        {words.map((word, index) => (
          <span
            key={index}
            className={`${word.size} text-white font-light hover:text-white/80 hover:scale-110 transition-all cursor-pointer`}
          >
            {word.text}
          </span>
        ))}
      </div>
    </div>
  );
}
