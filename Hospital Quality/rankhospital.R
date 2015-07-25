## Rank Hospital


## Read outcome data
## Check that state and outcome are valid
## Return hospital name in that state with the given rank
## 30-day death rate

rankhospital <- function(state, outcome, num = "best") {
temp.file <- read.csv("outcome-of-care-measures.csv", colClasses = "character")
pertinent.file <- temp.file[,c(2,7,11,17,23)]
colnames(pertinent.file) <- c("hospital_name", "statename", "heart_attack", "heart_failure", "pneumonia")
if (!(is.element(state, pertinent.file[,2]))) stop ("invalid state")
if (!(is.element(outcome, c("heart attack", "heart failure", "pneumonia")))) stop ("invalid outcome")
state.file <- pertinent.file[pertinent.file$statename == state,,drop=FALSE]
if (num == "best") {num <- 1}
ha <- function() {	
	state.file <- state.file[state.file$heart_attack != "Not Available",]
	state.file[, 3] <- as.numeric(state.file[, 3])
	state.file <- state.file[order(state.file[,3], state.file[,1]), ]
	if (num == "worst") {num <- nrow(state.file)}
	inter <- state.file[num,]
	as.character(inter[1])
		}
hf <- function() {	
	state.file <- state.file[state.file$heart_failure != "Not Available",]
	state.file[, 4] <- as.numeric(state.file[, 4])
	state.file <- state.file[order(state.file[,4], state.file[,1]), ]
	if (num == "worst") {num <- nrow(state.file)}
	inter <- state.file[num,]
	as.character(inter[1])
	}
pn <- function() {	
	state.file <- state.file[state.file$pneumonia != "Not Available",]
	state.file[, 5] <- as.numeric(state.file[, 5])
	state.file <- state.file[order(state.file[,5], state.file[,1]), ]
	if (num == "worst") {num <- nrow(state.file)}
	inter <- state.file[num,]
	as.character(inter[1])
	}
if (outcome == "heart attack") {answer <- ha()}
if (outcome == "heart failure") {answer <- hf()}
if (outcome == "pneumonia") {answer <- pn()}
return(answer)
}

