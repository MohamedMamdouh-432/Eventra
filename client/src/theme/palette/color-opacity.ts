export function colorOpacity(hexColor: string, opacity: number) {
    return hexColor + `0${Math.round((255 / 100) * opacity).toString(16)}`.slice(-2).toUpperCase();
}
