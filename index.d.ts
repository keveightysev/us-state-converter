declare module 'us-state-converter' {
  type StateInfo = {
    name: string;
    usps: string;
    demonym: string;
    iso: string;
    altAbbr: string[];
    uscg: string;
  };
  type Converter = (state: string) => StateInfo | undefined;
  const converter: Converter;
  export function fullName(abbrevation: string): string;
  export function abbr(fullName: string): string;
  export function only50(): StateInfo[];
  export function demonym(state: string): string;
  export default converter;
}
