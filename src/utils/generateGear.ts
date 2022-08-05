import { Coordinate } from "./Coordinate";

export interface gearGeneratorParams {
    radii: {
        outer: number;
        inner: number;
    };
    numTeeth: number;
    toothThicknessPercent?: number;
}

export const generateGear = (props: gearGeneratorParams) => {
    const {
        radii: {
            inner: innerRadius, outer: outerRadius
        },
        numTeeth,
        toothThicknessPercent = 0.5
    } = props;
    if (!Number.isInteger(numTeeth)) {
        throw Error('numberOfSpokes must be integer');
    }
    const current = new Coordinate(1, 0);
    const circularPitch = 2 * Math.PI / numTeeth;
    const topAndBottomLands = outerRadius + innerRadius;
    const topPitch = toothThicknessPercent * (innerRadius / topAndBottomLands) * circularPitch;
    const bottomPitch = toothThicknessPercent * (outerRadius / topAndBottomLands) * circularPitch;
    const actionAngleHalf = (1 - toothThicknessPercent) * circularPitch / 2;

    const firstPoint = current.scale(outerRadius);
    let d = `M${firstPoint}`;

    for (let i = 0; i < numTeeth; i++) {

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
