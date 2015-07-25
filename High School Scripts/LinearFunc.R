## Linear Function
curve((2*x) + 15 , -20, 20, add=TRUE, lty="1373")
curve(2*(x + 10), -20, 20, add=TRUE, lty = "dotted") 
curve((2*x), -20, 20, lty = "solid", add=TRUE)
title(main = "Parent is Linear Function y = 2x", ylab=" ")
Axis(x=-20:20, at=(seq(-20, 20, 5)), side=1)
Axis(x=-40:40, at=(seq(-40, 60, 10)), side=2)
grid()
savePlot ("LinearFunc", "jpg")
