## Exponential Function
curve(2^(x), -6, 6, lty = "solid")
curve((2^(x))/5, -6, 6, add=TRUE, lty="1373")
curve(2^(x*2), -6, 6, add=TRUE, lty = "dotted") 
title(main = "Exponential Function y = 2^x")
Axis(x=-6:6, at=-6:6, side=1)
grid()
savePlot ("ExpFunc", "jpg")
