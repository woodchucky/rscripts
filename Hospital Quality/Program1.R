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

        ## Return the mean of the pollutant across all monitors list
        ## in the 'id' vector (ignoring NA values)