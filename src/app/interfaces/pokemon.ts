interface NameUrl {
    name: string;
    url: string;
}

interface Ability extends NameUrl {}

interface AbilitySummary {
    ability: Ability;
    is_hidden: boolean;
    slot: number;
}

interface GameVersion extends NameUrl {}

interface GameIndex {
    game_index: number;
    version: GameVersion
}

interface Move extends NameUrl {}

interface MoveLearnMethod extends NameUrl {}

interface VersionGroup extends NameUrl {}

interface MoveDetails {
    level_learned_at: number;
    move_learn_method: MoveLearnMethod;
    version_group: VersionGroup;
}

interface MoveSummary {
    move: Move;
    version_group_details: MoveDetails[];
}

interface Type extends NameUrl {}

interface TypeSummary {
    slot: number;
    type: Type;
}

interface SpriteOtherDreamWorld {
    front_default: string;
    front_female: string;
}

interface SpriteOtherHome {
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

interface SpriteOfficialArtwork {
    front_default: string;
}

interface SpriteOther {
    dream_world: SpriteOtherDreamWorld
    home: SpriteOtherHome;
    'official-artwork': SpriteOfficialArtwork;
}

interface Sprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: SpriteOther;
    versions: any;
}

export interface Pokemon {
    abilities: AbilitySummary[];
    base_experience: number;
    forms: any[];
    game_indices: GameIndex[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: MoveSummary[];
    name: string;
    order: number;
    past_types: any[]
    species: any;
    sprites: Sprites;
    stats: any[];
    types: TypeSummary[];
    weight: number;
}
