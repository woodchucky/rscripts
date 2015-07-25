## Absolute Value Function
curve(abs(x) - 5 , -20, 20, add=TRUE, lty="1373")
curve(abs(x + 10), -20, 20, add=TRUE, lty = "dotted") 
curve(abs(x), -20, 20, lty = "solid", add=TRUE)
title(main = "Parent is Absolute Value Function y = |x|", ylab=" ")
Axis(x=-20:20, at=(seq(-20, 20, 5)), side=1)
Axis(x=-30:100, at=(seq(-20, 20, 5)), side=2)
grid()
savePlot ("AbsFunc", "jpg")
