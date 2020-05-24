import { form, message } from './domIds';

const main = ():void => {
    form.addEventListener('submit', processForm)
}


const processForm = (e): void => {
    e.preventDefault()
    const colors: Array<string> = getFormColors(e),
          resistorMessage: string = getMessageToAppend(colors) 
    message.innerHTML = resistorMessage
}


const getMessageToAppend = (colors: Array<string>): string => {
    const [resistorValue, lowValue, highValue ] = calculateResistorValues(colors),
          resistorMessage = `<h3>Resistor Value: ${resistorValue}Ω.</h3><h3>Low Tolerance: ${lowValue.toFixed(2)}Ω.</h3><h3>High Tolerance: ${highValue.toFixed(2)}Ω.</h3>`
    return resistorMessage
}

const calculateResistorValues = (colors: Array<string>): Array<number> => {
    const tolerance = getTolerance(colors),
          multiplier = getMultiplier(colors),
          bandValue = getBandValue(colors),
          resistorValue = bandValue * multiplier,
          lowValue = resistorValue - (resistorValue * tolerance),
          highValue = resistorValue + (resistorValue * tolerance)
          return [resistorValue, lowValue, highValue]
}


const getBandValue = (colors: Array<string>): number => {
    const bandColors = colors.length === 5 ? colors.slice(0, 4) : colors.slice(0, 3),
          bandString = bandColors.map(color => colorToBandValue(color)).join(''),
          bandValue = parseInt(bandString)
    return bandValue
}


const colorToBandValue = (color: string): string => {
    const bandValue =
        color === 'black'  ? '0' :
        color === 'brown'  ? '1' :
        color === 'red'    ? '2' :
        color === 'orange' ? '3' :
        color === 'yellow' ? '4' :
        color === 'green'  ? '5' :
        color === 'blue'   ? '6' :
        color === 'violet' ? '7' :
        color === 'grey'   ? '8' : '9'
    return bandValue
}


const getMultiplier = (colors: Array<string>): number => {
    const multiplier: number = 
        colors.length === 5 ? colorToMultiplier(colors[3]) : colorToMultiplier(colors[2])
    return multiplier
}

const colorToMultiplier = (color: string): number => {
    const multiplier =
        color === 'black'  ? 10**0 :
        color === 'brown'  ? 10**1 :
        color === 'red'    ? 10**2 :
        color === 'orange' ? 10**3 :
        color === 'yellow' ? 10**4 :
        color === 'green'  ? 10**5 :
        color === 'blue'   ? 10**6 :
        color === 'violet' ? 10**7 :
        color === 'grey'   ? 10**8 :
        color === 'white'  ? 10**9 :
        color === 'gold'   ? .1    : .01
    return multiplier
}


const getTolerance = (colors: Array<string>): number => {
    const tolerance: number = 
        colors.length === 4 ? colorToTolerance(colors[3]) :
        colors.length === 5 ? colorToTolerance(colors[4]) : .2
    return tolerance
}

const colorToTolerance = (color: string): number => {
    const tolerance: number =
        color === 'brown'  ? .01   :
        color === 'red'    ? .02   :
        color === 'green'  ? .005  :
        color === 'blue'   ? .0025 :
        color === 'violet' ? .001  :
        color === 'grey'   ? .0005 :
        color === 'gold'   ? .05   : .1
    return tolerance
}

const getFormColors = (e): Array<string> => {
    const formColors = [e.target[0], e.target[1], e.target[2], e.target[3], e.target[4]],
          colors = formColors.map(formColor => formColor.value),
          colors2 = colors.filter(color => color !== 'empty')
    return colors2
}

export default main