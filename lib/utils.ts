import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCurrentSeason(): string {
  const now = new Date();
  const month = now.getMonth() + 1; // getMonth() returns 0-11
  
  // Indian seasons based on months
  if (month >= 12 || month <= 2) {
    return 'Winter'; // December, January, February
  } else if (month >= 3 && month <= 5) {
    return 'Spring'; // March, April, May
  } else if (month >= 6 && month <= 8) {
    return 'Monsoon'; // June, July, August
  } else if (month >= 9 && month <= 11) {
    return 'Autumn'; // September, October, November
  }
  
  return 'Summer';
}

export function formatCookingTime(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} mins`;
  } else {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (remainingMinutes === 0) {
      return `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
    } else {
      return `${hours}h ${remainingMinutes}m`;
    }
  }
}

export function getDifficultyColor(difficulty: string): string {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 'bg-green-100 text-green-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'hard':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export function getSeasonalMessage(season: string): string {
  switch (season.toLowerCase()) {
    case 'winter':
      return 'Perfect warming dishes for the cool weather';
    case 'spring':
      return 'Fresh and light recipes for the pleasant season';
    case 'monsoon':
      return 'Comforting meals perfect for rainy days';
    case 'autumn':
      return 'Hearty dishes for the crisp weather';
    case 'summer':
      return 'Cooling and refreshing recipes to beat the heat';
    default:
      return 'Seasonal specialties just for you';
  }
}