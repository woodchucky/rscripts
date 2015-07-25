pollutantmean <- function(directory, pollutant, id = 1:332) {
        ## 'directory' is a character vector of length 1 indicating
        ## the location of the CSV files
		dirpath <- paste("~/", directory, "/", sep = "")
		crate <- NULL
		for (fil in id)
			{if (fil >0 && fil < 10)
				{filname <- paste("00", as.character(fil), sep = "")}
			if (fil > 9 && fil < 100)
				{filname <- paste("0", as.character(fil), sep = "")}
			if (fil > 99) {filname <- as.character(fil)}
			filpath <- paste(dirpath, filname, sep = "")
			filpath <- paste(filpath, ".csv", sep="")
			temp <- read.csv(filpath)
			temp <- temp[,pollutant]
			crate <- c(crate, temp)
			}
		mean(crate, na.rm = TRUE)
		}
        ## 'pollutant' is a character vector of length 1 indicating
        ## the name of the pollutant for which we will calculate the
        ## mean; either "sulfate" or "nitrate".

        ## 'id' is an integer vector indicating the monitor ID numbers
        ## to be used

complete <- function(directory, id = 1:332) {
		dirpath <- paste("~/", directory, "/", sep = "")
		nobs <- NULL
		for (fil in id)
			{if (fil >0 && fil < 10)
				{filname <- paste("00", as.character(fil), sep = "")}
			if (fil > 9 && fil < 100)
				{filname <- paste("0", as.character(fil), sep = "")}
			if (fil > 99) {filname <- as.character(fil)}
			filpath <- paste(dirpath, filname, sep = "")
			filpath <- paste(filpath, ".csv", sep="")
			temp <- read.csv(filpath)
			good <- complete.cases(temp)
			temp <- temp[good,]
			nobs <- c(nobs, nrow(temp))
			}
		data.frame(cbind(id, nobs))
		}	
        ## 'directory' is a character vector of length 1 indicating
        ## the location of the CSV files

        ## 'id' is an integer vector indicating the monitor ID numbers
        ## to be used
        
        ## Return a data frame of the form:
        ## id nobs
        ## 1  117
        ## 2  1041
        ## ...
        ## where 'id' is the monitor ID number and 'nobs' is the
        ## number of complete cases


        ## Return the mean of the pollutant across all monitors list
        ## in the 'id' vector (ignoring NA values)

corr <- function(directory, threshold = 0) {
	dirpath <- paste("~/", directory, "/", sep = "")
		nobs <- NULL
		for (fil in id)
			{if (fil >0 && fil < 10)
				{filname <- paste("00", as.character(fil), sep = "")}
			if (fil > 9 && fil < 100)
				{filname <- paste("0", as.character(fil), sep = "")}
			if (fil > 99) {filname <- as.character(fil)}
			filpath <- paste(dirpath, filname, sep = "")
			filpath <- paste(filpath, ".csv", sep="")
			temp <- read.csv(filpath)
			good <- complete.cases(temp)
			temp <- temp[good,]
			nobs <- c(nobs, nrow(temp))

        ## 'directory' is a character vector of length 1 indicating
        ## the location of the CSV files

        ## 'threshold' is a numeric vector of length 1 indicating the
        ## number of completely observed observations (on all
        ## variables) required to compute the correlation between
        ## nitrate and sulfate; the default is 0

        ## Return a numeric vector of correlations