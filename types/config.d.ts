interface SESSIONS {
    [key: string]: ColfSession
}

interface Config {
    INGAME_NAME: string
    WEBHOOK_URL: string
    FLIP_ACTION_DELAY: number
    USE_COFL_CHAT: boolean
    ENABLE_CONSOLE_INPUT: boolean
    SESSIONS: SESSIONS
    USE_WINDOW_SKIPS: boolean
    WEBSOCKET_URL: string
    DELAY_BETWEEN_CLICKS: number
    DELAY_TO_REMOVE_BED: number
}

interface ColfSession {
    id: string
    expires: Date
}
