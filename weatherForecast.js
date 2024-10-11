
async function run(apiURL) {
    const res = await fetch(apiURL);
    const data = await res.json();
    const listData = data.list;
    
    // It will be used to select temperature on specified date.
    // This is to make sure we select temperature on each day at around the same time.
    let selectedTime = null;
    for (let i = 0; i < listData.length; i++) {
        const dailyTime = listData[i].dt_txt.split(" ")[1];
        // the first selected time we choose the first record 
        if (selectedTime == null) {
            selectedTime = dailyTime;
        }

        const temp = listData[i].main.temp
        const date = new Date(listData[i].dt_txt);
        const options = {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "2-digit",
        };
        const formattedDate = new Intl.DateTimeFormat("en-UK", options).format(
            date
        );
        
        // on the last day, temperature data on the selected time is not exist.
        // we choose to use the last record because it is the nearest time from the selected time.
        if (dailyTime == selectedTime || i == listData.length - 1) {
            console.log(formattedDate + ': ' + temp + '°C');
        }
    }
}

async function main(){
    const apiKey = "7a96e391aca995ce5bb3a9f6b368d6de";
    
    const jktLat = -6.2;
    const jktLon = 106.816666;
    
    const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${jktLat}&lon=${jktLon}&units=metric&appid=${apiKey}`;
    
    console.log("Weather Forecast: ")
    await run(apiURL)
}

main()