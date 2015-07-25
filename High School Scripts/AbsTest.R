## Absolute Value Function
curve(abs(x + 20) - 10, -40, 40, add=TRUE, lty = "dotted") 
curve(abs(x), -40, 40, lty = "solid", add=TRUE)
curve(abs(x-10) + 40 , -40, 40, add=TRUE, lty="1373")
curve(abs(x + 20) - 10, -40, 40, add=TRUE, lty = "dotted") 
Axis(at=(seq(-40, 40, 10)), side=1)
title(main = "Parent is Absolute Value Function y = |x|", ylab=" ")
grid()
savePlot ("AbsFunc", "jpg")
