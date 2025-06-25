interface BlueDotProps {
  className?: string;
}

export default function BlueDot({ className = '' }: BlueDotProps) {
  return (
    <div className={`flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3 ${className}`}>
      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
    </div>
  );
} 