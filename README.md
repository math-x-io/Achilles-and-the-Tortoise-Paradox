
# Achilles and the Tortoise Paradox

Implementation of the mathematical paradox of Achilles and the Tortoise, specifically inspired by Satoru Gojo's infinity power based on this paradox in the manga Jujutsu Kaisen.

### Problem Summary

The Achilles and the Tortoise paradox is a famous paradox proposed by the Greek philosopher Zeno of Elea. It illustrates a situation where a fast runner (Achilles) can never catch up with a slower tortoise that has a head start, because each time Achilles reaches the point where the tortoise was, the tortoise has moved a bit further. This paradox highlights questions about infinity and the divisibility of space and time.

More details [here](https://personal.lse.ac.uk/robert49/ebooks/philsciadventures/lecture24.html)

### Parallel with Satoru Gojo's Power in Jujutsu Kaisen

In the anime and manga "Jujutsu Kaisen", Satoru Gojo possesses a technique called "Infinity" that prevents his opponents from touching him directly. The closer an opponent gets to him, the slower they become, seemingly never able to reach Gojo. This concept is inspired by the Achilles and the Tortoise paradox, where the distance between Achilles and the tortoise reduces at each step, but Achilles can never actually catch the tortoise.

![Achilles and the Tortoise Paradox](https://miro.medium.com/v2/resize:fit:1200/1*FqV2ZhTzy1tYPOK3T-lyhg.gif)

## Program Description

This program simulates the Achilles and the Tortoise paradox using circles on an HTML canvas. The central circle represents the range of the paradox (Gojo Satoru or the tortoise depending on interpretations), and three other circles represent various entities moving randomly. The circles move at different speeds, and their speed is progressively halved as they approach the central circle.

### Features

1. **Circle Visualization**: The circles are drawn on an HTML canvas.
2. **Range Modification**: The user can modify the range of the central circle using a range input.
3. **Simulation Reset**: A button allows resetting the simulation.
4. **Speed Display**: The speed of each circle is displayed on the side.

1. **Distance Calculation**:
    $$
    \text{distance} = \sqrt{(x_{\text{center}} - x_{\text{circle}})^2 + (y_{\text{center}} - y_{\text{circle}})^2}
    $$

2. **Speed Reduction**:
    If the distance between a circle and the central circle is less than the range of the central circle:
    $$
    \text{factor} = \frac{\text{distance}}{\text{range}}
    $$
    $$
    v_x = v_x \times \text{factor}
    $$
    $$
    v_y = v_y \times \text{factor}
    $$

3. **Return to Normal Speed**:
    If the distance is greater than the range of the central circle, the speed gradually returns to normal:
    $$
    v_x += (\text{random} \times 2 - 1) \times 0.01
    $$
    $$
    v_y += (\text{random} \times 2 - 1) \times 0.01
    $$
    $$
    \text{speed} = \sqrt{v_x^2 + v_y^2}
    $$
    If the speed exceeds the original speed:
    $$
    v_x = v_x \times \frac{\text{originalSpeed}}{\text{speed}}
    $$
    $$
    v_y = v_y \times \frac{\text{originalSpeed}}{\text{speed}}
    $$

## Program Files

1. **index.html**: Contains the HTML structure of the page, including the canvas and controls.
2. **physics.js**: Contains the `Circle` class that handles the drawing and updating of the circles.
3. **simu.js**: Contains the simulation logic, including animation and user interaction management.

I did this project for fun because I really like the manga Jujutsu Kaisen and wanted to improve my mathematical simulation skills. Mathematically, I did not completely follow the paradox explanations because instead of directly halving the speed, I progressively divide it to achieve a better rendering and avoid a direct cut-off.
