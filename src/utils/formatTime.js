export const formatTime = (time) => {
    if (!time || isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `0${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
