export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        <h1
          className="text-6xl md:text-7xl font-light mb-4 text-[#E8C96A] text-balance"
          style={{ fontFamily: 'Cormorant Garamond' }}
        >
          Where Time Meets Luxury
        </h1>
        <p
          className="text-lg md:text-xl text-[#C9A84C] max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: 'DM Sans' }}
        >
          Experience premium watches and electronics designed for the discerning collector. 
          From timeless classics to cutting-edge innovations, we bring excellence to every moment.
        </p>
      </div>
    </div>
  );
}
