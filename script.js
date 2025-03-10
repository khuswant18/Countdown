const startDate = new Date("20 February, 2024 20:00:00").getTime(); 
const endDate = new Date("23 February, 2028 20:00:00").getTime();


let x = setInterval(function updateTimer() {
        const now = new Date().getTime()
    
        const distanceCovered = now-startDate
        const distancepending = endDate-now 
    
    
        const oneDayinMilli = (24*60*60*1000)
        const oneHourinMilli = (60*60*1000)
        const oneMininMilli = (60*1000)
    
        const days = Math.floor(distancepending/oneDayinMilli)
    
        const hrs = Math.floor(distancepending%oneDayinMilli/
        (60*60*1000))
    
        const mins = Math.floor(distancepending%oneHourinMilli/(60*1000))
    
        const secs = Math.floor(distancepending%oneMininMilli/(1000))
    
    
        //Populate in UI 
        document.getElementById("days").innerHTML = days
        document.getElementById("hours").innerHTML = hrs
        document.getElementById("minutes").innerHTML = mins
        document.getElementById("seconds").innerHTML = secs
    
    
        //calulate width percentage for progress bar:
        const totaldistance = endDate-startDate;
    
        const percentageDistance = (distanceCovered/totaldistance)*100;
    
        //set width for progress bar:
    
        document.getElementById("progress-bar").style.width = percentageDistance + "%"
    
        if(distancepending<0) {
            clearInterval(x)
            document.getElementById("Countdown").innerHTML = "EXPIRED";
    
            document.getElementById("progress-bar").style.width = "100%";
    
        }
},1000)