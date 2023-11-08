#### Using Python to Help Americans Vote

The Voting Information Project (VIP) is an initiative led by Google and Democracy Works [Link text Here](https://link-url-here.org) that helps millions of voters find information about their elections with Google's Civic Information API. Our cross-company team of data scientists, software engineers, and election experts worked to receive, review, and approve the most up-to-date information on where and when to vote. The data we sourced was viewed 140 million times to inform people about the 2022 primary elections.

As one of our seven Data Science Apprentice for Democracy Works, I was directly responsible for efficiently collecting and formatting the data to be sent to Google for Florida, Kansas, Maine, Minnesota, and Vermont.

If you ever looked up where to vote on Google, you probably saw our data:



<img src="/imgs/dw/How_To_Vote_Key_Dates.PNG" alt="VIP Voting Information Project UI">



<br />
<br />

#### Problem: Data Collect was Slow, Inefficent, and Error Prone

Collecting voting location data was a slow, tedious, and error prone process. The election system differs by state and county, and there was a ton of variety between the local data sources. Most of the interns manually collected the data by reading websites or making phone calls, and then formatted it to fit the requirements of Google’s API. One location may require 20 lines of manual data entry. Here is an example of one entry that helped constituents vote in Jay County, Vermont. Start time, end time and start data and end date had to be manually entered. And this is just for one county, for some states, the information was different for each individual city:

![Democracy Works Data Sample](/imgs/dw/dwDataSample.PNG)

<br />
<br />

#### Solution: Automate System with Python, Cutting Manual Data Collection by 80%

I dared myself to automate this process, and developed a system that cut down my data entry time by 80%.
Identifying that certain states had all of their voting data on one webpage, and used a webscraping library called BeautifulSoup to collect that data automatically. When this option was not available, I collected the rest by hand.
Then I wrote a Python script to automatically and reliably apply the data transformations that Google needed. I used the Google Sheets API to pull the data I had collected before into my python environment, and then used Pandas to make the transformations, including: adjusting business hours for holidays, filling in incomplete data, and duplicating the data for each week up until the election in the required format.
The result: clean data produced in a fraction of a second, when it would normally have required hours of tedious work.

<br />
<br />

#### What I learned

1. Solve for the big picture

   Once I solved the problem for myself, I presented my process to my supervisor with ideas of how it might help the whole team. She was enthusiastic about my initiative, and yet worried about a lack of time and risk of introducing errors to a process that was already functioning. Our conversation showed me that introducing technology is a bigger process than just building it, and if you want to make something that is going to make a wider impact, you must have the capability to handle much bigger challenges than when developing a personal system for personal efficiency.

2. Writing modular code is super important

   The Data Scientists in Democracy Works reviewed my code. They said because it was not written in modular functions, it was hard to read and to change. I also experienced the impact of this poor design, and spent more time than I wanted making tweaks to my code for different states. Although I’m proud of what this code accomplished, I know I can write something much more flexible and readable now.

3. Invest time in choosing the best technology stack

   One reason the other data interns couldn’t use my process was because my technology stack made it hard to share my code between different environments and with people with different technical skill sets. Later on, I learned Google Sheets has a feature for integrating Javascript into their spreadsheet. If I wrote my program in JS, it would have been much easier to share a Google sheets link than a python file. If I were to develop this idea further, I would write it in JS to increase its usability.
