export interface Pokemon {
    id: number;
    num: string;
    name: string;
    img: string;
    type: string[];
    height: string;
    weight: string;
    weaknesses: string[];
    prev_evolution?: { num: string; name: string }[];
    next_evolution?: { num: string; name: string }[];
}