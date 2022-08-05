# svg-gear-generator

This library allows you to generate an SVG of a simple gear. This does NOT generate a technically accurate gear, with things like correct curved involutes and undercuts, etc. Useful for custom settings icons, (and generating stars!). There are three possible uses:

1. `generateGear(args)`: This generates a `d` attribute for use with `<path>`. Used internally by the following components.
2. `<Gear>` component: For use with React. Returns a `<path>` element.
3. `<GearWithAxle>` component: For use with React, same as `<Gear>` but also includes a circle for the axle.

Arguments for the `generateGear` function and custom props for `<Gear>` and `<GearWithAxle>` are the same:

* `radii: { outer: number; inner: number }`: Specify the outer and inner radiuses of the gear (addendum and dedendum circle radiuses)
* `numTeeth: number`: Number of gear teeth.
* `toothThicknessPercent: number`: For each tooth, how much of it is the flat part (see examples). Optional, defaults to `0.5`

The `<Gear>` component additionally takes any props that `<path>` does. The `<GearWithAxle>` takes additionally:

* `axleRadius: number`: Radius of the axle.
* `axleProps: React.SVGAttributes<SVGPathElement>`: Any additional props to be passed to the `<circle>` element. If undefined, will copy any props specified on the `<GearWithAxle>` component onto the `<circle>` element.

## Examples:

### Gear with 9 teeth and axle.

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 4 4">
    <GearWithAxle
        axleRadius={0.6}
        numTeeth={9}
        radii={{inner: 1.0, outer: 0.8}}
        toothThicknessPercent={0.5}
        fill="none"
        stroke="black"
        strokeWidth={0.05}
        strokeLinejoin="round"
    />
</svg>
```
![Gear with 9 teeth](./images/gear.svg)

### Gear with 13 teeth.

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 4 4">
    <Gear
        numTeeth={13}
        radii={{inner: 1.0, outer: 0.85}}
        toothThicknessPercent={0.5}
        fill="none"
        stroke="black"
        strokeWidth={0.05}
        strokeLinejoin="round"
    />
</svg>
```
![Gear with 13 teeth](./images/gearWaxle.svg)

### Starbust 

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 4 4">
    <Gear
        numTeeth={13}
        radii={{inner: 1.0, outer: 0.7}}
        toothThicknessPercent={1.0}
        fill="none"
        stroke="black"
        strokeWidth={0.05}
        strokeLinejoin="round"
    />
</svg>
```
![Starburst](./images/burst.svg)

### Star

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 4 4">
    <Gear
        numTeeth={5}
        radii={{inner: 1.0, outer: 0.4}}
        toothThicknessPercent={0.0}
        fill="none"
        stroke="black"
        strokeWidth={0.05}
        strokeLinejoin="miter"
    />
</svg>
```
![Star](./images/star.svg)

## License

[MIT](LICENSE)

## Like this utility? Support my hobby!

[PayPal donation link](https://paypal.me/seanchenpiano?locale.x=en_US)