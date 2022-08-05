import { Coordinate } from "./Coordinate";

export interface gearGeneratorParams {
    radii: [number, number];
    numberOfSpokes: number;
    toothThicknessPercent?: number;
}

export const generateGear = (props: gearGeneratorParams) => {
    const {
        radii: [outerRadius, innerRadius],
        numberOfSpokes,
        toothThicknessPercent = 0.5
    } = props;
    if (!Number.isInteger(numberOfSpokes)) {
        throw Error('numberOfSpokes must be integer');
    }
    const current = new Coordinate(1, 0);
    const circularPitch = 2 * Math.PI / numberOfSpokes;
    const topAndBottomLands = outerRadius + innerRadius;
    const topPitch = toothThicknessPercent * (innerRadius / topAndBottomLands) * circularPitch;
    const bottomPitch = toothThicknessPercent * (outerRadius / topAndBottomLands) * circularPitch;
    const actionAngleHalf = (1 - toothThicknessPercent) * circularPitch / 2;

    const firstPoint = current.scale(outerRadius);
    let d = `M${firstPoint}`;

    console.log(current.length());


    for (let i = 0; i < numberOfSpokes; i++) {

        // write starting point of this loop, unless first iter
        if (i !== 0) {
            const point = current.scale(outerRadius);
            d += `L${point}`;
        }
        current.rotated(topPitch);
        // top land
        const next = current.scale(outerRadius);

        current.rotated(actionAngleHalf);
        // bottom land
        const firstBottom = current.scale(innerRadius);

        current.rotated(bottomPitch);
        const secondBottom = current.scale(innerRadius);

        current.rotated(actionAngleHalf);

        // build svg A string
        d += `A${outerRadius} ${outerRadius} 0 0 1 ${next}`;
        d += `L${firstBottom}`;
        d += `A${innerRadius} ${innerRadius} 0 0 1 ${secondBottom}`;
    }

    d += 'z';
    return d;
}
