import {
    _getDecks,
} from './Data'

export function getDecks () {
    return Promise.all([
        _getDecks(),
    ])
}