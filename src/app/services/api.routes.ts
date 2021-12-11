const API_BASE_URL = 'https://pokeapi.co/api/v2'

export default {
    getAllPokemon: (limit?: number) => `${API_BASE_URL}/pokemon/${limit ? '?limit='+limit : ''}`,
    getPokemon: (name: string) => `${API_BASE_URL}/pokemon/${name}`
};