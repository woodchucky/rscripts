rankall <- function(outcome, num = "best") {   ## opens rankall()
## Read outcome data
## Check that state and outcome are valid
## For each state, find the hospital of the given rank
## Return a data frame with the hospital names and the
## (abbreviated) state name
temp.file <- read.csv("outcome-of-care-measures.csv", colClasses = "character")
pertinent.file <- temp.file[,c(2,7,11,17,23)]
colnames(pertinent.file) <- c("hospital_name", "statename", "heart_attack", "heart_failure", "pneumonia")
if (!(is.element(outcome, c("heart attack", "heart failure", "pneumonia")))) stop ("invalid outcome")
if (num == "best") {num <- 1}
if (outcome == "heart attack") { disease <- 3 }
if (outcome == "heart failure") { disease <- 4}
if (outcome == "pneumonia") { disease <- 5}
ha <- function()  {        ## opens ha()
	pertinent.file <- pertinent.file[, c(1, 2, disease)]
	pertinent.file <- pertinent.file[pertinent.file$heart_attack != "Not Available",]
	pertinent.file[, 3] <- as.numeric(pertinent.file[, 3])
	pertinent.file <- pertinent.file[order(pertinent.file[,2], pertinent.file[,3], pertinent.file[,1]),]
	## pertinent.file <- pertinent.file[order(pertinent.file[,2]),]
	## print(pertinent.file)
	store <- table(pertinent.file$statename)
	states <- unique(sort(pertinent.file$statename))
	order = 1
	counter <- as.data.frame(matrix(ncol = 3, nrow = 54))
	counter[,3] <- 0
	for (state in states) {   ## opens for loop
		counter[order,1] <- state
		counter[order,2] <- store[order]
			if (order == 1) { counter[order,3] <- store[order]   }
				else        {
					counter[order, 3] <- counter[(order - 1), 3] + store[order]
						}
		order <- order + 1
			}        ## closes for loop
	answer <- as.data.frame(matrix(ncol = 2, nrow = 54))
	colnames(answer) <- c("hospital", "state")
	for (i in 1:nrow(counter))
			{   ## opens for loop
				answer[i, 2] <- states[i]
				if (num > counter[i,2]) {answer[i, 1] <- NA}
				else {answer[i, 1] <- pertinent.file[(counter[i, 3] - counter[i, 2] + num), 1]}
				
}   ## closes for loop
return(answer) ## returns answer
} ## closes function ha()

hf <- function()  {        ## opens hf()
	pertinent.file <- pertinent.file[, c(1, 2, disease)]
	pertinent.file <- pertinent.file[pertinent.file$heart_failure != "Not Available",]
	pertinent.file[, 3] <- as.numeric(pertinent.file[, 3])
	pertinent.file <- pertinent.file[order(pertinent.file[,2], pertinent.file[,3], pertinent.file[,1]),]
	## pertinent.file <- pertinent.file[order(pertinent.file[,2]),]
	## print(pertinent.file)
	store <- table(pertinent.file$statename)
	states <- unique(sort(pertinent.file$statename))
	order = 1
	counter <- as.data.frame(matrix(ncol = 3, nrow = 54))
	counter[,3] <- 0
	for (state in states) {   ## opens for loop
		counter[order,1] <- state
		counter[order,2] <- store[order]
			if (order == 1) { counter[order,3] <- store[order]   }
				else        {
					counter[order, 3] <- counter[(order - 1), 3] + store[order]
						}
		order <- order + 1
			}        ## closes for loop
	answer <- as.data.frame(matrix(ncol = 2, nrow = 54))
	colnames(answer) <- c("hospital", "state")
	for (i in 1:nrow(counter))
			{   ## opens for loop
				answer[i, 2] <- states[i]
				if (num > counter[i,2]) {answer[i, 1] <- NA}
				else {answer[i, 1] <- pertinent.file[(counter[i, 3] - counter[i, 2] + num), 1]}
				
}   ## closes for loop
return(answer)
} ## closes function hf()
pn <- function()  {        ## opens pn()
	pertinent.file <- pertinent.file[, c(1, 2, disease)]
	pertinent.file <- pertinent.file[pertinent.file$pneumonia != "Not Available",]
	pertinent.file[, 3] <- as.numeric(pertinent.file[, 3])
	pertinent.file <- pertinent.file[order(pertinent.file[,2], pertinent.file[,3], pertinent.file[,1]),]
	## pertinent.file <- pertinent.file[order(pertinent.file[,2]),]
	## print(pertinent.file)
	store <- table(pertinent.file$statename)
	states <- unique(sort(pertinent.file$statename))
	order = 1
	counter <- as.data.frame(matrix(ncol = 3, nrow = 54))
	counter[,3] <- 0
	for (state in states) {   ## opens for loop
		counter[order,1] <- state
		counter[order,2] <- store[order]
			if (order == 1) { counter[order,3] <- store[order]   }
				else        {
					counter[order, 3] <- counter[(order - 1), 3] + store[order]
						}
		order <- order + 1
			}        ## closes for loop
	answer <- as.data.frame(matrix(ncol = 2, nrow = 54))
	colnames(answer) <- c("hospital", "state")
	for (i in 1:nrow(counter))
			{   ## opens for loop
				answer[i, 2] <- states[i]

           if (num == "worst") {answer[i, 1] <- pertinent.file[(counter[i, 3]), 1]}

			else {   ## new else   NEED TO COPY THIS SNIPPET TO ha() and hf()

				if (num > counter[i,2]) {answer[i, 1] <- NA}
				else {answer[i, 1] <- pertinent.file[(counter[i, 3] - counter[i, 2] + num), 1]}
				}  ## end new else
}   ## closes for loop
return(answer) ## returns answer
} ## closes function pn()
if (outcome == "heart attack") { answer <- ha() } 
if (outcome == "heart failure") { answer <- hf()}
if (outcome == "pneumonia") { answer <- pn()}
return(answer)
## out.file <- pertinent.file[,c(1, place), drop = FALSE]
}   ## closes rankall()

