import * as React from 'react';
import { gearGeneratorParams, generateGear } from '../../utils/generateGear';

export interface GearProps extends gearGeneratorParams {}

export const Gear: React.FC<GearProps & React.SVGAttributes<SVGPathElement>> = (props) => {
    const {
        radii,
        numTeeth,
        toothThicknessPercent,
        ...rest
    } = props;
    const gearString = generateGear({ radii, numTeeth, toothThicknessPercent });

    return (
        <path d={gearString} {...rest} />
    );
};

export interface GearWithAxleProps extends GearProps {
    axleRadius: number;
    axleProps?: React.SVGAttributes<SVGPathElement>;
}

export const GearWithAxle: React.FC<GearWithAxleProps & React.SVGAttributes<SVGPathElement>> = (props) => {
    const {
        radii,
        numTeeth,
        toothThicknessPercent,
        axleRadius,
        axleProps: _axleProps,
        ...rest
    } = props;
    const gearParams = {
        radii, numTeeth, toothThicknessPercent
    };
    const axleProps = _axleProps === undefined ? rest : _axleProps;
    const gearString = generateGear({ radii, numTeeth, toothThicknessPercent });

    return (
        <>
            <Gear d={gearString} {...gearParams} {...rest}/>
            <circle cx="0" cy="0" r={axleRadius} {...axleProps} />
        </>
    );
};
