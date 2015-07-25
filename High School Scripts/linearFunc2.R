## Linear Function
curve((x), -30, 30, lty = "solid", add=TRUE)
curve((x) - 20 , -30, 30, add=TRUE, lty="1373")
curve((x + 10), -30, 30, add=TRUE, lty = "dotted") 
title(main = "Parent is Linear Function y = x", ylab=" ")
Axis(x=-30:20, at=(seq(-30, 30, 10)), side=1)
Axis(x=-40:40, at=(seq(-30, 30, 10)), side=2)
grid()
savePlot ("LinearFunc", "jpg")
