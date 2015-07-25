## Quadratic Function
curve(((x)^2)/3, -50, 50, add=TRUE, lty="1373")
curve((4*x)^2, -50, 50, add=TRUE, lty = "dotted") 
curve((x)^2, -50, 50, lty = "solid", add=TRUE)
title(main = "Parent is Quadratic Function y = x^2", ylab=" ")
Axis(x=-30:30, at=(seq(-50, 50, 10)), side=1)
Axis(x=-500:1500, at=(seq(-500, 1500, 200)), side=2)
grid()
savePlot ("QuadFunc", "jpg")
