import { type EvolutionModel } from "../evolution/evolution.model";

export interface Pokemon {
    id: number;
    num: string;
    name: string;
    img: string;
    type: string[];
    height: string;
    weight: string;
    weaknesses: string[];
    prev_evolution?: EvolutionModel[];
    next_evolution?: EvolutionModel[];
}

