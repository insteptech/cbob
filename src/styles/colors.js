export let colorSet = {
    primary: '#A9D4FB',
    primaryGradient: '#344757',
	whiteblue:'#b0c5d6',
    bgColor: '#6FB5F4',
    white: '#ffff',
    error: '#B00020',
    black: '#000'
}


export const opacityColor = (code = colorSet.primary, opacity) => {
    const color = hexToRgb(code);
    console.log(color)
    return `rgba(${color.r},${color.g},${color.b},${opacity / 100})`
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        r: parseInt(result[1], 16),
    } : null;
}