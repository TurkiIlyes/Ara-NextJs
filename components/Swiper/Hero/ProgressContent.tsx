const ProgressContent = ({ progressCircle }: { progressCircle: any }) => {
  return (
    <div className="absolute right-8 bottom-6 z-10 flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        <svg viewBox="0 0 48 48" className="w-12 h-12">
          <circle
            cx="24"
            cy="24"
            r="20"
            className="stroke-current text-white "
            style={{
              strokeWidth: "4px",
              fill: "none",
              strokeDasharray: "125.6",
              strokeDashoffset: "125.6",
              transform: "rotate(-90deg)",
              transformOrigin: "center",
            }}
            ref={progressCircle}
          />
        </svg>
      </div>
    </div>
  );
};

export default ProgressContent;
