export const formatDate = (dateString: string): Date => {
  return new Date(dateString);
};

export const formatPotentiallyHazardous = (param: any): string => {
  if (param === 'Y') return 'Yes';
  if (param === 'N') return 'No';
  return '';
};

export const formattedData = (data: any) => {
  return data.map((item: any) => ({
    ...item,
    discovery_date: formatDate(item.discovery_date),
    pha: formatPotentiallyHazardous(item.pha)
  }));
}
