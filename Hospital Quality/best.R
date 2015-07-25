best <- function(state, outcome) {
temp.file <- read.csv("outcome-of-care-measures.csv", colClasses = "character")
pertinent.file <- temp.file[,c(2,7,11,17,23)]
colnames(pertinent.file) <- c("hospital_name", "statename", "heart_attack", "heart_failure", "pneumonia")
if (!(is.element(state, pertinent.file[,2]))) stop ("invalid state")
if (!(is.element(outcome, c("heart attack", "heart failure", "pneumonia")))) stop ("invalid outcome")
state.file <- pertinent.file[pertinent.file$statename == state,,drop=FALSE]
ha <- function() {	
	state.file <- state.file[state.file$heart_attack != "Not Available",]
	state.file[, 3] <- as.numeric(state.file[, 3])
	minval <- min(state.file[,3])
	state.file <- state.file[state.file$heart_attack == minval,]
	ndx <- order(state.file$hospital_name)
	hospital <- state.file[ndx,]
	answer <- hospital[[1,1]]
	return(answer)
	}
hf <- function() {	
	state.file <- state.file[state.file$heart_failure != "Not Available",]
	state.file[, 4] <- as.numeric(state.file[, 4])
	minval <- min(state.file[,4])
	state.file <- state.file[state.file$heart_failure == minval,]
	ndx <- order(state.file$hospital_name)
	hospital <- state.file[ndx,]
	answer <- hospital[[1,1]]
	return(answer)
	}
pn <- function() {	
	state.file <- state.file[state.file$pneumonia != "Not Available",]
	state.file[, 5] <- as.numeric(state.file[, 5])
	minval <- min(state.file[,5])
	state.file <- state.file[state.file$pneumonia == minval,]
	ndx <- order(state.file$hospital_name)
	hospital <- state.file[ndx,]
	answer <- hospital[[1,1]]
	return(answer)
	}
if (outcome == "heart attack") {answer <- ha()}
if (outcome == "heart failure") {answer <- hf()}
if (outcome == "pneumonia") {answer <- pn()}
return(answer)
}
