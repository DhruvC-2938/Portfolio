

const SectionDivider = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
  <div
    className="
      relative
      h-px
      bg-gradient-to-r
      from-transparent
      via-stone-300
      to-transparent
    "
  >
    <div
      className="
        absolute
        inset-0
        blur-md
        bg-gradient-to-r
        from-transparent
        via-[#b53a25]/30
        to-transparent
      "
    />
  </div>
</div>
  );
};

export default SectionDivider;