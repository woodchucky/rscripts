## Quadratic Function
curve((x - 10)^2 - 250 , -30, 30, add=TRUE, lty="1373")
curve((x + 20)^2 + 500, -30, 30, add=TRUE, lty = "dotted") 
curve((x)^2, -30, 30, lty = "solid", add=TRUE)
title(main = "Parent is Quadratic Function y = x^2", ylab=" ")
Axis(x=-30:30, at=(seq(-30, 30, 10)), side=1)
Axis(x=-500:1500, at=(seq(-500, 1500, 250)), side=2)
grid()
savePlot ("QuadFunc", "jpg")
