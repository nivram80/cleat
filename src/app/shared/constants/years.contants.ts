const BEGINNING_YEAR: number = 1940;
const CURRENT_YEAR: number = new Date().getFullYear();
export const YEARS: Array<string> = buildYearArray(BEGINNING_YEAR, CURRENT_YEAR);

function buildYearArray(beginningYear, currentYear) {
  let years: Array<string> = [];
  for(let i = beginningYear; i <= currentYear; i++) {
    years.push(i.toString());
  }
  return years;
}
