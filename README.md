# Ldgr dashboard

[Ldgr Dashboard](https://ldgr-dashboard-react.onrender.com/)

## Background
During the interview, Kristina said that learning/brushing up on pandas and creating graph illustration would be a good use of my time between now and the potential time of hopefully joining the Ldgr team. This would better ensure that I would hit the ground running. I expanded on one of the interview questions and created an ARR graph with several other graphs in a summary dashboard. 

## Explanation:
This is a summary dashboard of key metrics companies, CEOs, Head of Finance, etc care about which are critical to business success. This would offer a quick glance at key metrics before viewing more detailed graphs in another view. 

**Including:**
- Annual Recurring Revenue
- Churn
- Revenue Growth Rate
- Top Customers List (based on LTV)
- Worldwide Customers
- Customer Acquistion Cost
- Expenses
- Cash FLow
- Margins

  The 4 numbers at the top for ARR, Customers, Revenue Growth Rate, and Churn are randomly generated within a realistic range. This simulates regular live updates that would pull from real client metric data. These 4 metrics were chosen as they are some of the most critical to measure business health.

## ARR

The **`ARR`** graph is the only graph with curated data. The data comes from `stripe/static/data/stripe_payments.csv` and reflects the ARR interview question. Each line in the csv represents a payment that has a `start_date`, `end_date`, `plan` which is `yearly` or `montlhy` and a `price` which is `$4999.99` and `$499.99` respectively. 

`stripe/views.py` calculates the **`ARR`** for each month based on how the yearly and monthly plans contribute to ARR for that month. The csv is ready by and calculations are done with pandas. The function `get_csv_data` returns a JSON object of the  **`ARR`** data which will be called by the frontend. 

## Stack
- Vite
- Python (Django, Pandas)
- React (Typescript)
- Tailwind
- [Nivo Rocks](https://nivo.rocks/)
- [Syntax UI](https://syntaxui.com/)
- [Number Flow](https://number-flow.barvian.me/) 

## Screenshots

![Screen Shot 2024-11-22 at 12 11 54 AM](https://github.com/user-attachments/assets/1bcc56e8-b937-415e-a319-c9084677e4e9)
### Annual Recurring Revenue

![Screen Shot 2024-11-21 at 9 27 52 PM](https://github.com/user-attachments/assets/5040092e-cf06-47f5-ad1d-799952055bf7)
### Churn

![Screen Shot 2024-11-21 at 9 30 45 PM](https://github.com/user-attachments/assets/de26aef5-0e02-45b9-b5be-7a024be16c1b)
### Revenue Growth Rate

![Screen Shot 2024-11-22 at 12 33 14 AM](https://github.com/user-attachments/assets/e57ea091-2411-465b-a332-0cd7b3b18329)
### Top Customers

![Screen Shot 2024-11-21 at 9 31 07 PM](https://github.com/user-attachments/assets/dd90ffc5-2a4d-4239-a9af-064f80fc2b1e)
### Worldwide Customers

![Screen Shot 2024-11-21 at 9 31 24 PM](https://github.com/user-attachments/assets/136d55ac-cd18-40ae-85c9-2cd00c959d47)
### Customer Acquisition Cost

![Screen Shot 2024-11-21 at 9 31 35 PM](https://github.com/user-attachments/assets/b9e01a55-220d-495b-80b0-c429362fbdc7)
### Expenses 

![Screen Shot 2024-11-21 at 9 31 54 PM](https://github.com/user-attachments/assets/8935a213-9327-4d1d-8138-25f429b4c026)
### Cash flow

![Screen Shot 2024-11-21 at 9 32 06 PM](https://github.com/user-attachments/assets/40e02bd6-0964-44aa-8543-2bfbbc80979f)
### Margins

## Mobile Screenshots
![IMG_2697](https://github.com/user-attachments/assets/7f7a0189-270b-4251-86cf-d05478ac4850)

![IMG_154F7BFD0CA7-1](https://github.com/user-attachments/assets/c8b819c2-6e84-4b2c-93a3-6a65da07a2a6)




## Inspiration:

[Kristina Chodorow's and Helena Fogarty's post](https://www.linkedin.com/posts/kchodorow_fundraising-startups-founders-activity-7264056681616097280-mWXO?utm_source=share&utm_medium=member_desktop)

[Mihir Deo's Post](https://www.linkedin.com/posts/mihirdeo_here-are-the-5-key-metrics-every-early-stage-activity-7265370918674145280-tUti?utm_source=share&utm_medium=member_desktop)

## Future
An important thing to consider is how easily graphs can be interpreted, especially for non-technical people. Kristina mentioned that a surprising learning was how many people in finance are not aware of how to use sql for simple calculations. Having the data may deem worthless or sub-optimal if the data is not easily understood and digestible. 
