type button = {
    name: string;
    link: string;
}
type KelasActive = {
    active?: string,
    setactive: (item: string) => void
}
type cardKelas = {
    img: string;
    start: string[];  // Array string untuk ikon bintang
    title: string;
    price: number;
}
export type {button, KelasActive, cardKelas}