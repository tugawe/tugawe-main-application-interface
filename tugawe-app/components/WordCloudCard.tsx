'use client'

const words = [
  { text: 'Fresh', size: 'text-4xl', color: 'text-blue-200' },
  { text: 'Delicious', size: 'text-3xl', color: 'text-white' },
  { text: 'Friendly', size: 'text-2xl', color: 'text-blue-300' },
  { text: 'Crowded', size: 'text-xl', color: 'text-white/80' },
  { text: 'Slow', size: 'text-lg', color: 'text-white/70' },
  { text: 'Clean', size: 'text-2xl', color: 'text-blue-200' },
  { text: 'Amazing', size: 'text-3xl', color: 'text-white' },
]

export default function WordCloudCard() {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 h-full flex flex-col">
      <h2 className="text-xl font-semibold text-white mb-6">Word cloud</h2>
      
      <div className="flex-1 flex flex-wrap items-center justify-center gap-4 content-center">
        {words.map((word, index) => (
          <span
            key={index}
            className={`${word.size} ${word.color} font-semibold transition-all hover:scale-110 cursor-pointer`}
            style={{
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            {word.text}
          </span>
        ))}
      </div>
    </div>
  )
}
