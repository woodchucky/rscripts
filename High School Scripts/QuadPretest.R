## Quadratic Function
curve((x - 50)^2 - 5000 , -100, 100, add=TRUE, lty="1373")
curve((x + 75)^2 + 10000, -100, 100, add=TRUE, lty = "dotted") 
curve((x)^2, -100, 100, ,lty = "solid", add=TRUE)
title(main = "Parent is Quadratic Function y = x^2", ylab=" ")
Axis(x=seq(-100,100,20), at=(seq(-100,100, 25)),side=1)
Axis(x=-500:1500, side=2)
grid()
savePlot ("QuadFunc", "jpg")
