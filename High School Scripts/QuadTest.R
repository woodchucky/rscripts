## Quadratic Function 
curve((x - 15)^2 - 400 , -35, 35, add=TRUE, lty="1373", axes=FALSE)
curve((x + 20)^2 + 600, -35, 35, add=TRUE, lty = "dotted", axes=FALSE) 
curve((x)^2, -35, 35, ,lty = "solid", add=TRUE, axes=FALSE, xaxt="n")
title(main = "Parent is Quadratic Function y = x^2")
Axis(side=1, at=(seq(-35, 35, 5)))
Axis(side=2, at=(seq(-600, 2000, 200)))
grid()
savePlot ("QuadFunc", "jpg")
