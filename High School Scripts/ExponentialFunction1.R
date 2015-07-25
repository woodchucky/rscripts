## Exponential Function
curve(2^(x), -5, 5, lty = "solid")
curve(2^(x) + 5, -5, 5, add=TRUE, lty="1373")
curve(2^(x + 2), -5, 5, add=TRUE, lty = "dotted") 
title(main = "Exponential Function y = 2^x")
Axis(x=-5:5, at=-5:5, side=1)
grid()
savePlot ("ExpFunc", "jpg")
