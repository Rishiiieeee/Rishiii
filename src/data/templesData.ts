import { TempleDetail } from '../types';
import { TEMPLE_DETAILS_PART1 } from './templeDetailsPart1';
import { TEMPLE_DETAILS_PART2 } from './templeDetailsPart2';
import { TEMPLE_IMAGE_MAP, TEMPLE_SUMMARIES, TempleSummaryItem } from './templesList';

export { TEMPLE_IMAGE_MAP, TEMPLE_SUMMARIES };
export type { TempleSummaryItem };

export const TEMPLES_MAP: Record<string, TempleDetail> = {
  ...TEMPLE_DETAILS_PART1,
  ...TEMPLE_DETAILS_PART2,
};

export const ALL_TEMPLES: TempleDetail[] = Object.values(TEMPLES_MAP);

export function getTempleById(id: string): TempleDetail | undefined {
  if (!id) return undefined;
  const normalizedId = id.toLowerCase().trim();
  return TEMPLES_MAP[normalizedId] || ALL_TEMPLES.find(t => t.id === normalizedId || t.name.toLowerCase().includes(normalizedId));
}

export function getTemplesByState(stateId: string): TempleDetail[] {
  if (!stateId) return [];
  const normalized = stateId.toLowerCase().trim();
  return ALL_TEMPLES.filter(t => t.stateId.toLowerCase() === normalized);
}

export function getTemplesByDistrict(districtId: string): TempleDetail[] {
  if (!districtId) return [];
  const normalized = districtId.toLowerCase().trim();
  return ALL_TEMPLES.filter(t => t.districtId.toLowerCase() === normalized || t.districtName.toLowerCase().includes(normalized));
}

export function getTemplesByCategory(category: string): TempleDetail[] {
  if (!category || category === 'All') return ALL_TEMPLES;
  return ALL_TEMPLES.filter(t => t.category === category);
}

export function searchTemples(query: string): TempleDetail[] {
  if (!query || !query.trim()) return ALL_TEMPLES;
  const q = query.toLowerCase().trim();
  return ALL_TEMPLES.filter(t =>
    t.name.toLowerCase().includes(q) ||
    t.shortName.toLowerCase().includes(q) ||
    t.stateName.toLowerCase().includes(q) ||
    t.districtName.toLowerCase().includes(q) ||
    t.location.toLowerCase().includes(q) ||
    t.deity.toLowerCase().includes(q) ||
    t.dynasty.toLowerCase().includes(q) ||
    t.category.toLowerCase().includes(q) ||
    t.engineering.architecturalStyle.toLowerCase().includes(q)
  );
}

export function getFeaturedTemples(): TempleDetail[] {
  // Tirupati, Lepakshi, Hampi, Puri, Somnath, Kedarnath, Kashi Vishwanath, Rameshwaram
  const featuredIds = ['tirupati', 'lepakshi', 'hampi', 'puri', 'somnath', 'kedarnath', 'kashi-vishwanath', 'rameshwaram'];
  return featuredIds.map(id => TEMPLES_MAP[id]).filter(Boolean) as TempleDetail[];
}

export function getJyotirlingas(): TempleDetail[] {
  return ALL_TEMPLES
    .filter(t => t.category === 'Jyotirlinga')
    .sort((a, b) => (a.jyotirlingaNumber || 0) - (b.jyotirlingaNumber || 0));
}
