let ages = [23,25,22,23,24,25,26,27,38,34,35]

teamData = [
    {
      "teamName": "RR",
      "amount": 702500000
    },
    {
      "teamName": "RCB",
      "amount": 786000000
    },
    {
      "teamName": "SRH",
      "amount": 749000000
    },
    {
      "teamName": "DC",
      "amount": 760000000
    },
    {
      "teamName": "KXIP",
      "amount": 645000000
    },
    {
      "teamName": "CSK",
      "amount": 848500000
    },
    {
      "teamName": "MI",
      "amount": 830500000
    },
    {
      "teamName": "KKR",
      "amount": 765000000
    }
  ]



amounts = teamData.map(e=>e['amount']).reduce((a,c)=>a+c,0);



sum =function(arr){
    let res = arr.reduce((a,c)=>a+c,0);
    return res;
}

showResult = function(callBack,arr){
    let res = callBack(arr);
    console.log("Result :"+res)
}


showResult(sum,ages);


let players = [
    {
      "name": "Virat Kohli (R)",
      "role": "Batsman",
      "label": "RCB",
      "price": 170000000
    },
    {
      "name": "Pat Cummins",
      "role": "All-Rounder",
      "label": "KKR",
      "price": 155000000
    },
    {
      "name": "Rishabh Pant (R)",
      "role": "Wicket Keeper",
      "label": "DC",
      "price": 150000000
    },
    {
      "name": "Rohit Sharma (R)",
      "role": "Batsman",
      "label": "MI",
      "price": 150000000
    },
    {
      "name": "MS Dhoni (R)",
      "role": "Wicket Keeper",
      "label": "CSK",
      "price": 150000000
    },
    {
      "name": "Steve Smith (R)",
      "role": "Batsman",
      "label": "RR",
      "price": 125000000
    },
    {
      "name": "Ben Stokes (R)",
      "role": "All-Rounder",
      "label": "RR",
      "price": 125000000
    },
    {
      "name": "Sunil Narine (R)",
      "role": "All-Rounder",
      "label": "KKR",
      "price": 125000000
    },
    {
      "name": "David Warner (R)",
      "role": "Batsman",
      "label": "SRH",
      "price": 125000000
    },
    {
      "name": "AB de Villiers (R)",
      "role": "Batsman",
      "label": "RCB",
      "price": 110000000
    },
    {
      "name": "Hardik Pandya (R)",
      "role": "All-Rounder",
      "label": "MI",
      "price": 110000000
    },
    {
      "name": "Suresh Raine (R)",
      "role": "Batsman",
      "label": "CSK",
      "price": 110000000
    },
    {
      "name": "Manish Pandey (R)",
      "role": "Batsman",
      "label": "SRH",
      "price": 110000000
    },
    {
      "name": "KL Rahul (R)",
      "role": "Wicket Keeper",
      "label": "KXIP",
      "price": 110000000
    },
    {
      "name": "Glenn Maxwell",
      "role": "All-Rounder",
      "label": "KXIP",
      "price": 107500000
    },
    {
      "name": "Christopher Morris",
      "role": "All-Rounder",
      "label": "RCB",
      "price": 100000000
    },
    {
      "name": "Rashid Khan (R)",
      "role": "Bowler",
      "label": "SRH",
      "price": 90000000
    },
    {
      "name": "Krunal Pandya (R)",
      "role": "All-Rounder",
      "label": "MI",
      "price": 88000000
    },
    {
      "name": "Andre Russell (R)",
      "role": "Batsman",
      "label": "KKR",
      "price": 85000000
    },
    {
      "name": "Bhuvneshwar Kumar (R)",
      "role": "Bowler",
      "label": "SRH",
      "price": 85000000
    },
    {
      "name": "Sheldon Cottrell",
      "role": "Bowler",
      "label": "KXIP",
      "price": 85000000
    },
    {
      "name": "Nathan Coulter-Nile",
      "role": "Bowler",
      "label": "MI",
      "price": 80000000
    },
    {
      "name": "Sanju Samson (R)",
      "role": "Wicket Keeper",
      "label": "RR",
      "price": 80000000
    },
    {
      "name": "Kedar Jadhav (R)",
      "role": "All-Rounder",
      "label": "CSK",
      "price": 78000000
    },
    {
      "name": "Shimron Heymyer",
      "role": "Batsman",
      "label": "DC",
      "price": 77500000
    },
    {
      "name": "Ravichandran Ashwin (R)",
      "role": "Bowler",
      "label": "DC",
      "price": 76000000
    },
    {
      "name": "Dinesh Karthik (R)",
      "role": "Wicket Keeper",
      "label": "KKR",
      "price": 74000000
    },
    {
      "name": "Jofra Archer (R)",
      "role": "Bowler",
      "label": "RR",
      "price": 72000000
    },
    {
      "name": "Shreyas Iyer (R)",
      "role": "Batsman",
      "label": "DC",
      "price": 70000000
    },
    {
      "name": "Jasprit Bumrah (R)",
      "role": "Bowler",
      "label": "MI",
      "price": 70000000
    },
    {
      "name": "Ravindra jadeja (R)",
      "role": "All-Rounder",
      "label": "CSK",
      "price": 70000000
    },
    {
      "name": "Piyush Chawla",
      "role": "Bowler",
      "label": "CSK",
      "price": 67500000
    },
    {
      "name": "Dwayne Bravo (R)",
      "role": "All-Rounder",
      "label": "CSK",
      "price": 64000000
    },
    {
      "name": "Ishan Kishan (R)",
      "role": "Wicket Keeper",
      "label": "MI",
      "price": 62000000
    },
    {
      "name": "Gowtham Krishnappa (R)",
      "role": "Batsman",
      "label": "KXIP",
      "price": 62000000
    },
    {
      "name": "Yuzvendra Chahal (R)",
      "role": "Bowler",
      "label": "RCB",
      "price": 60000000
    },
    {
      "name": "Kuldeep Yadav (R)",
      "role": "Bowler",
      "label": "KKR",
      "price": 58000000
    },
    {
      "name": "Karun Nair (R)",
      "role": "Batsman",
      "label": "KXIP",
      "price": 56000000
    },
    {
      "name": "Sam Curran",
      "role": "All-Rounder",
      "label": "CSK",
      "price": 55000000
    },
    {
      "name": "Kieron Pollard (R)",
      "role": "All-Rounder",
      "label": "MI",
      "price": 54000000
    },
    {
      "name": "Ajinkya Rahane (R)",
      "role": "Batsman",
      "label": "DC",
      "price": 52500000
    },
    {
      "name": "Eoin Morgan",
      "role": "Batsman",
      "label": "KKR",
      "price": 52500000
    },
    {
      "name": "Shikhar Dhawan (R)",
      "role": "Batsman",
      "label": "DC",
      "price": 52000000
    },
    {
      "name": "Axax Patel (R)",
      "role": "Bowler",
      "label": "DC",
      "price": 50000000
    },
    {
      "name": "Shivam Dube (R)",
      "role": "All-Rounder",
      "label": "RCB",
      "price": 50000000
    },
    {
      "name": "Karn Sharma (R)",
      "role": "All-Rounder",
      "label": "CSK",
      "price": 50000000
    },
    {
      "name": "Marcus Stoinis",
      "role": "All-Rounder",
      "label": "DC",
      "price": 48000000
    },
    {
      "name": "Mohammad Shami (R)",
      "role": "Bowler",
      "label": "KXIP",
      "price": 48000000
    },
    {
      "name": "Aaron Finch",
      "role": "Batsman",
      "label": "RCB",
      "price": 44000000
    },
    {
      "name": "Jos Butler (R)",
      "role": "Wicket Keeper",
      "label": "RR",
      "price": 44000000
    },
    {
      "name": "Kagiso Rabada (R)",
      "role": "Bowler",
      "label": "DC",
      "price": 42000000
    },
    {
      "name": "Umesh Yadav (R)",
      "role": "Bowler",
      "label": "RCB",
      "price": 42000000
    },
    {
      "name": "Nicholas Pooran (R)",
      "role": "Batsman",
      "label": "KXIP",
      "price": 42000000
    },
    {
      "name": "Amit Mishra (R)",
      "role": "Bowler",
      "label": "DC",
      "price": 40000000
    },
    {
      "name": "Kane Richardson",
      "role": "Bowler",
      "label": "RCB",
      "price": 40000000
    },
    {
      "name": "Shane Watson (R)",
      "role": "All-Rounder",
      "label": "CSK",
      "price": 40000000
    },
    {
      "name": "Varun Chakaravarthy",
      "role": "All-Rounder",
      "label": "KKR",
      "price": 40000000
    },
    {
      "name": "Siddarth Kaul (R)",
      "role": "Bowler",
      "label": "SRH",
      "price": 38000000
    },
    {
      "name": "Nitish Rana (R)",
      "role": "Batsman",
      "label": "KKR",
      "price": 34000000
    },
    {
      "name": "Washington Sundar (R)",
      "role": "Bowler",
      "label": "RCB",
      "price": 32000000
    },
    {
      "name": "Suryakumar Yadav (R)",
      "role": "Batsman",
      "label": "MI",
      "price": 32000000
    },
    {
      "name": "Trent Boult (R)",
      "role": "Bowler",
      "label": "MI",
      "price": 32000000
    },
    {
      "name": "Kamlesh Nagarkoti (R)",
      "role": "Batsman",
      "label": "KKR",
      "price": 32000000
    },
    {
      "name": "Vijay Shankar (R)",
      "role": "All-Rounder",
      "label": "SRH",
      "price": 32000000
    },
    {
      "name": "Shahbaz Nadeem (R)",
      "role": "Bowler",
      "label": "SRH",
      "price": 32000000
    },
    {
      "name": "Navdeep Saini (R)",
      "role": "Bowler",
      "label": "RCB",
      "price": 30000000
    },
    {
      "name": "Robin Uthappa",
      "role": "Batsman",
      "label": "RR",
      "price": 30000000
    },
    {
      "name": "Ankit Rajpoot (R)",
      "role": "Bowler",
      "label": "RR",
      "price": 30000000
    },
    {
      "name": "Rahul Tweatia (R)",
      "role": "Bowler",
      "label": "RR",
      "price": 30000000
    },
    {
      "name": "Jaydev Unadkat",
      "role": "Bowler",
      "label": "RR",
      "price": 30000000
    },
    {
      "name": "Shivam Mavi (R)",
      "role": "All-Rounder",
      "label": "KKR",
      "price": 30000000
    },
    {
      "name": "Kane Williamson",
      "role": "Batsman",
      "label": "SRH",
      "price": 30000000
    },
    {
      "name": "Sandeep Sharma (R)",
      "role": "Bowler",
      "label": "SRH",
      "price": 30000000
    },
    {
      "name": "Syed Khaleel Ahmed (R)",
      "role": "Bowler",
      "label": "SRH",
      "price": 30000000
    },
    {
      "name": "Chris Jordan",
      "role": "All-Rounder",
      "label": "KXIP",
      "price": 30000000
    },
    {
      "name": "Quinton de Kock (R)",
      "role": "Wicket Keeper",
      "label": "MI",
      "price": 28000000
    },
    {
      "name": "Mohammaed Siraj (R)",
      "role": "Bowler",
      "label": "RCB",
      "price": 26000000
    },
    {
      "name": "Shardul Thakur (R)",
      "role": "Bowler",
      "label": "CSK",
      "price": 26000000
    },
    {
      "name": "Alex Carey",
      "role": "Wicket Keeper",
      "label": "DC",
      "price": 24000000
    },
    {
      "name": "Yashasvi Jaiswal",
      "role": "All-Rounder",
      "label": "RR",
      "price": 24000000
    },
    {
      "name": "Varun Aaron (R)",
      "role": "Bowler",
      "label": "RR",
      "price": 24000000
    },
    {
      "name": "Ambati Rayadu (R)",
      "role": "Batsman",
      "label": "CSK",
      "price": 22000000
    },
    {
      "name": "Jonny Bairstow (R)",
      "role": "Wicket Keeper",
      "label": "SRH",
      "price": 22000000
    },
    {
      "name": "Dale Steyn",
      "role": "Bowler",
      "label": "RCB",
      "price": 20000000
    },
    {
      "name": "Sherfane Rutherford (R)",
      "role": "Batsman",
      "label": "MI",
      "price": 20000000
    },
    {
      "name": "Chris Lynn",
      "role": "Batsman",
      "label": "MI",
      "price": 20000000
    },
    {
      "name": "Lasith Malinga (R)",
      "role": "Bowler",
      "label": "MI",
      "price": 20000000
    },
    {
      "name": "Murali Vijay (R)",
      "role": "Batsman",
      "label": "CSK",
      "price": 20000000
    },
    {
      "name": "Harbhajan Singh (R)",
      "role": "Bowler",
      "label": "CSK",
      "price": 20000000
    },
    {
      "name": "Josh Hazlewood",
      "role": "Bowler",
      "label": "CSK",
      "price": 20000000
    },
    {
      "name": "Mayank Markande (R)",
      "role": "Bowler",
      "label": "RR",
      "price": 20000000
    },
    {
      "name": "Mitchell Marsh",
      "role": "All-Rounder",
      "label": "SRH",
      "price": 20000000
    },
    {
      "name": "Chris Gayle (R)",
      "role": "Batsman",
      "label": "KXIP",
      "price": 20000000
    },
    {
      "name": "Ravi Bishnoi",
      "role": "Bowler",
      "label": "KXIP",
      "price": 20000000
    },
    {
      "name": "Rahul Chahar (R)",
      "role": "All-Rounder",
      "label": "MI",
      "price": 19000000
    },
    {
      "name": "Priyam Garg",
      "role": "Batsman",
      "label": "SRH",
      "price": 19000000
    },
    {
      "name": "Virat Singh",
      "role": "Batsman",
      "label": "SRH",
      "price": 19000000
    },
    {
      "name": "Shubham Gill (R)",
      "role": "Batsman",
      "label": "KKR",
      "price": 18000000
    },
    {
      "name": "Pathiv Patel (R)",
      "role": "Wicket Keeper",
      "label": "RCB",
      "price": 17000000
    },
    {
      "name": "Moeen Ali (R)",
      "role": "All-Rounder",
      "label": "RCB",
      "price": 17000000
    },
    {
      "name": "Faf du Plessis (R)",
      "role": "All-Rounder",
      "label": "CSK",
      "price": 16000000
    },
    {
      "name": "Lockie Ferguson (R)",
      "role": "Batsman",
      "label": "KKR",
      "price": 16000000
    },
    {
      "name": "Jason Roy",
      "role": "Batsman",
      "label": "DC",
      "price": 15000000
    },
    {
      "name": "Chris Woakes",
      "role": "All-Rounder",
      "label": "DC",
      "price": 15000000
    },
    {
      "name": "Mandeep Singh (R)",
      "role": "All-Rounder",
      "label": "KXIP",
      "price": 14000000
    },
    {
      "name": "Kartik Tyagi",
      "role": "Bowler",
      "label": "RR",
      "price": 13000000
    },
    {
      "name": "Prithvi Shaw (R)",
      "role": "Batsman",
      "label": "DC",
      "price": 12000000
    },
    {
      "name": "Wridhhiman Saha (R)",
      "role": "Wicket Keeper",
      "label": "SRH",
      "price": 12000000
    },
    {
      "name": "Ishant Sharma (R)",
      "role": "Bowler",
      "label": "DC",
      "price": 11000000
    },
    {
      "name": "Pawan Negi (R)",
      "role": "All-Rounder",
      "label": "RCB",
      "price": 10000000
    },
    {
      "name": "Mitchell McClenaghan (R)",
      "role": "Bowler",
      "label": "MI",
      "price": 10000000
    },
    {
      "name": "Imran Tahir (R)",
      "role": "Bowler",
      "label": "CSK",
      "price": 10000000
    },
    {
      "name": "Tom Curran",
      "role": "All-Rounder",
      "label": "RR",
      "price": 10000000
    },
    {
      "name": "Andrew Tye",
      "role": "Bowler",
      "label": "RR",
      "price": 10000000
    },
    {
      "name": "Tom Banton",
      "role": "Batsman",
      "label": "KKR",
      "price": 10000000
    },
    {
      "name": "Shreevats Goswami (R)",
      "role": "Wicket Keeper",
      "label": "SRH",
      "price": 10000000
    },
    {
      "name": "Mohammad Nabi (R)",
      "role": "All-Rounder",
      "label": "SRH",
      "price": 10000000
    },
    {
      "name": "Mayank Agarwal (R)",
      "role": "Batsman",
      "label": "KXIP",
      "price": 10000000
    },
    {
      "name": "Basil Thampi (R)",
      "role": "Bowler",
      "label": "SRH",
      "price": 9500000
    },
    {
      "name": "Anmolpreet Singh (R)",
      "role": "Batsman",
      "label": "MI",
      "price": 8000000
    },
    {
      "name": "Deepak Chahar (R)",
      "role": "Bowler",
      "label": "CSK",
      "price": 8000000
    },
    {
      "name": "Anuj Rawat",
      "role": "Wicket Keeper",
      "label": "RR",
      "price": 8000000
    },
    {
      "name": "Rinku Singh (R)",
      "role": "Batsman",
      "label": "KKR",
      "price": 8000000
    },
    {
      "name": "Dhawal Kulkarni (R)",
      "role": "Bowler",
      "label": "MI",
      "price": 7500000
    },
    {
      "name": "David Miller",
      "role": "Batsman",
      "label": "RR",
      "price": 7500000
    },
    {
      "name": "Harry Gurney (R)",
      "role": "Batsman",
      "label": "KKR",
      "price": 7500000
    },
    {
      "name": "Hardus Viljoen (R)",
      "role": "Batsman",
      "label": "KXIP",
      "price": 7500000
    },
    {
      "name": "Avesh Khan (R)",
      "role": "Batsman",
      "label": "DC",
      "price": 7000000
    },
    {
      "name": "Rahul Tripathi",
      "role": "Batsman",
      "label": "KKR",
      "price": 6000000
    },
    {
      "name": "Abhishek Sharma (R)",
      "role": "Batsman",
      "label": "SRH",
      "price": 5500000
    },
    {
      "name": "Prabhsimran Singh",
      "role": "Wicket Keeper",
      "label": "KXIP",
      "price": 5500000
    },
    {
      "name": "Keemo Paul (R)",
      "role": "Batsman",
      "label": "DC",
      "price": 5000000
    },
    {
      "name": "Mohit Sharma",
      "role": "Bowler",
      "label": "DC",
      "price": 5000000
    },
    {
      "name": "Gurkeerat Singh (R)",
      "role": "Batsman",
      "label": "RCB",
      "price": 5000000
    },
    {
      "name": "Isuru Udana",
      "role": "All-Rounder",
      "label": "RCB",
      "price": 5000000
    },
    {
      "name": "Saurabh Tiwary",
      "role": "Batsman",
      "label": "MI",
      "price": 5000000
    },
    {
      "name": "Jayant Yadav (R)",
      "role": "Bowler",
      "label": "MI",
      "price": 5000000
    },
    {
      "name": "Lungisani Ngidi (R)",
      "role": "Bowler",
      "label": "CSK",
      "price": 5000000
    },
    {
      "name": "Mitchell Santner (R)",
      "role": "Bowler",
      "label": "CSK",
      "price": 5000000
    },
    {
      "name": "Oshane Thomas",
      "role": "Bowler",
      "label": "RR",
      "price": 5000000
    },
    {
      "name": "Fabian Allen",
      "role": "All-Rounder",
      "label": "SRH",
      "price": 5000000
    },
    {
      "name": "Billy Stanlake (R)",
      "role": "Bowler",
      "label": "SRH",
      "price": 5000000
    },
    {
      "name": "Deepak Hooda",
      "role": "All-Rounder",
      "label": "KXIP",
      "price": 5000000
    },
    {
      "name": "James Neesham",
      "role": "All-Rounder",
      "label": "KXIP",
      "price": 5000000
    },
    {
      "name": "Asif K M (R)",
      "role": "All-Rounder",
      "label": "CSK",
      "price": 4000000
    },
    {
      "name": "T Natarajan (R)",
      "role": "Bowler",
      "label": "SRH",
      "price": 4000000
    },
    {
      "name": "Shashank Singh (R)",
      "role": "Batsman",
      "label": "RR",
      "price": 3000000
    },
    {
      "name": "Darshan Nalkande (R)",
      "role": "Batsman",
      "label": "KXIP",
      "price": 3000000
    },
    {
      "name": "Sarfaraz Khan (R)",
      "role": "Batsman",
      "label": "KXIP",
      "price": 2500000
    },
    {
      "name": "Lalit Yadav",
      "role": "All-Rounder",
      "label": "DC",
      "price": 2000000
    },
    {
      "name": "Sandeep Lamichhane (R)",
      "role": "Bowler",
      "label": "DC",
      "price": 2000000
    },
    {
      "name": "Harshal Patel (R)",
      "role": "Bowler",
      "label": "DC",
      "price": 2000000
    },
    {
      "name": "Tushar Deshpande",
      "role": "Bowler",
      "label": "DC",
      "price": 2000000
    },
    {
      "name": "Devdutt Padikkal (R)",
      "role": "Batsman",
      "label": "RCB",
      "price": 2000000
    },
    {
      "name": "Shahbaz Ahamad",
      "role": "Wicket Keeper",
      "label": "RCB",
      "price": 2000000
    },
    {
      "name": "Joshua Philippe",
      "role": "Wicket Keeper",
      "label": "RCB",
      "price": 2000000
    },
    {
      "name": "Pavan Deshpande",
      "role": "All-Rounder",
      "label": "RCB",
      "price": 2000000
    },
    {
      "name": "Ankul Roy (R)",
      "role": "Batsman",
      "label": "MI",
      "price": 2000000
    },
    {
      "name": "Aditya Tare (R)",
      "role": "Wicket Keeper",
      "label": "MI",
      "price": 2000000
    },
    {
      "name": "Digvijay Deshmukh",
      "role": "All-Rounder",
      "label": "MI",
      "price": 2000000
    },
    {
      "name": "Prince Balwant Rai Singh",
      "role": "All-Rounder",
      "label": "MI",
      "price": 2000000
    },
    {
      "name": "Mohsin Khan",
      "role": "Bowler",
      "label": "MI",
      "price": 2000000
    },
    {
      "name": "Monu Singh (R)",
      "role": "Batsman",
      "label": "CSK",
      "price": 2000000
    },
    {
      "name": "Ruturaj Gaikwad (R)",
      "role": "Batsman",
      "label": "CSK",
      "price": 2000000
    },
    {
      "name": "Jagadeesan Narayan (R)",
      "role": "Wicket Keeper",
      "label": "CSK",
      "price": 2000000
    },
    {
      "name": "R. Sai Kishore",
      "role": "Bowler",
      "label": "CSK",
      "price": 2000000
    },
    {
      "name": "Riyan Parag (R)",
      "role": "Batsman",
      "label": "RR",
      "price": 2000000
    },
    {
      "name": "Manan Vohra (R)",
      "role": "Batsman",
      "label": "RR",
      "price": 2000000
    },
    {
      "name": "Mahipal Lmoror (R)",
      "role": "All-Rounder",
      "label": "RR",
      "price": 2000000
    },
    {
      "name": "Shreyas Gopal (R)",
      "role": "All-Rounder",
      "label": "RR",
      "price": 2000000
    },
    {
      "name": "Anirudha Ashok Joshi",
      "role": "All-Rounder",
      "label": "RR",
      "price": 2000000
    },
    {
      "name": "Akash Singh",
      "role": "Bowler",
      "label": "RR",
      "price": 2000000
    },
    {
      "name": "Prasidh Krishna (R)",
      "role": "Batsman",
      "label": "KKR",
      "price": 2000000
    },
    {
      "name": "Siddhesh Lad (R)",
      "role": "Batsman",
      "label": "KKR",
      "price": 2000000
    },
    {
      "name": "Nikhil Shankar Naik",
      "role": "Wicket Keeper",
      "label": "KKR",
      "price": 2000000
    },
    {
      "name": "Chris Green",
      "role": "All-Rounder",
      "label": "KKR",
      "price": 2000000
    },
    {
      "name": "Sandeep Warrier (R)",
      "role": "Bowler",
      "label": "KKR",
      "price": 2000000
    },
    {
      "name": "Pravin Tambe",
      "role": "Bowler",
      "label": "KKR",
      "price": 2000000
    },
    {
      "name": "M Siddharth",
      "role": "Bowler",
      "label": "KKR",
      "price": 2000000
    },
    {
      "name": "Sandeep Bavanaka",
      "role": "All-Rounder",
      "label": "SRH",
      "price": 2000000
    },
    {
      "name": "Sanjay Yadav",
      "role": "All-Rounder",
      "label": "SRH",
      "price": 2000000
    },
    {
      "name": "Abdul Samad",
      "role": "All-Rounder",
      "label": "SRH",
      "price": 2000000
    },
    {
      "name": "Arshdeep Singh (R)",
      "role": "Batsman",
      "label": "KXIP",
      "price": 2000000
    },
    {
      "name": "Harpreet Brar (R)",
      "role": "Batsman",
      "label": "KXIP",
      "price": 2000000
    },
    {
      "name": "Tajinder Dhillon",
      "role": "All-Rounder",
      "label": "KXIP",
      "price": 2000000
    },
    {
      "name": "Ishan Patel",
      "role": "Bowler",
      "label": "KXIP",
      "price": 2000000
    },
    {
      "name": "Jagadeesha Suchith (R)",
      "role": "Bowler",
      "label": "KXIP",
      "price": 2000000
    },
    {
      "name": "Murugan Ashwin (R)",
      "role": "Bowler",
      "label": "KXIP",
      "price": 2000000
    }
  ];



min_bid_Players = players.filter(player=>player["price"] == 2000000);
  
console.log(min_bid_Players.length)
min_bid_Players.sort((p1,p2)=>p1['label']-p2['label']).
forEach(player => {
    console.log(`${player['name']} - ${player['price']} - ${player['label']}`);
});

let min_paid_map = new Map();

min_bid_Players.forEach(player=>{
    let label = player['label'];
    if(min_paid_map.get(label)){
        min_paid_map.set(label, min_paid_map.get(label) + 1);
    }else{
        min_paid_map.set(label,1);
    }
}) 

console.log(min_paid_map)
// DC = ? MI= ? RR = ? .....



data = "JS,CS,JS,IS,JS,IS,JS,CS,CS,KS".split(",");
let map = new Map();
data.forEach(e=>{
    if(map.get(e)){
        map.set(e,map.get(e)+1);
    }else{
        map.set(e,1)
    }
})
console.log(map);
