## Absolute Value Function
curve(abs(x-10) + 20 , -30, 30, add=TRUE, lty="1373", ylim = c(-30, 40))
curve(abs(x + 15) - 20, -30, 30, add=TRUE, lty = "dotted") 
curve(abs(x), -30, 30, lty = "solid", add=TRUE)
title(main = "Parent is Absolute Value Function y = |x|", ylab=" ")
Axis(x=-20:20, at=(seq(-30, 30, 5)), side=1)
Axis(x=-30:40, at=(seq(-30, 40, 10)), side=2)
grid()
savePlot ("AbsFunc", "jpg")
