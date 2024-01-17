# Meteorite Landing Prediction

Meteorite Explorer is a data analysis and visualization project that explores meteorite landings worldwide. The project uses various libraries and tools to perform statistical and visual analysis on meteorite data, including geospatial mapping, treemaps, box and whisker plots, word clouds, and more.

This Project is combined effort of my members
  - [Talha Shakeel](https://github.com/cls-talha)
  - Bilal Abid
  - Rayyan Ali Shah
  - Emaan Yawer Shehzad

## Table of Contents
- [Installation](#installation)
- [Data Source](#data-source)
- [Exploratory data analysis (EDA)](#Exploratory-data-analysis-(EDA))
- [Filtering Meteorite Fell Data](#Filtering-Meteorite-Fell-Data)
- [Applying Different Interpolation Techniques](#Applying-Different-Interpolation-Techniques)
- [Applying Deep Learning and Machine Learning](#Applying-Deep-Learning-and-Machine-Learning)
- [Web Application](#web-application)
- [Project Collaboration and Contributions](#Project-Collaboration-and-Contributions)


## Installation
To run the project, you need to have Python installed on your machine. Additionally, you can install the required dependencies using the following:

```bash
!pip install -r requirements.txt
```

## Data Source
The dataset used for this project is sourced from NASA and is publicly available on the [NASA Open Data Portal](https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh).

Upon obtaining the dataset, several preprocessing steps were undertaken to enhance its usability for analysis and visualization.

1. **Geolocation to Country Conversion:**
    - The `GeoLocation` information was processed to extract latitude and longitude.
    - Utilizing an external API, these coordinates were translated into country names.
    - Note: This process took approximately 10 hours to complete.

2. **Data Filtering:**
    - The dataset was filtered to include only entries with years falling between 1800 and 2022.
    - NaN values were removed from the dataset.
    - Entries with zero values were excluded from the dataset.

These preprocessing steps aim to enhance the dataset's quality and relevance for subsequent analysis and visualization in the Meteorite Explorer project.

## Exploratory Data Analysis (EDA)

1. **Geospatial Distribution (Map):**
   - Worldwide meteorite landings with mass-indicated markers.

2. **Meteorite Class Distribution (Treemap):**
   - Insights into the prevalence of different meteorite classes.

3. **Box and Whisker Plot for Geolocation:**
   - Distribution of latitude and longitude values.

4. **Word Cloud for Meteorite Names:**
   - Visualization of frequently occurring words in names.

5. **Meteorites Found/Fell Over the Years (Stacked Bar Plot):**
   - Temporal distribution of discoveries.

6. **Distribution of Meteorites Found/Fell (Pie Chart):**
   - Proportion of found versus observed falling meteorites.

7. **Distribution of Meteorites Found Across Countries (Pie Chart):**
   - Top 10 countries with meteorite finds and an "Other" category.

These visualizations and many more collectively contribute to a comprehensive exploration of meteorite data, enabling users to grasp key patterns, distributions, and trends.

## Filtering Meteorite Fell Data

We have meticulously filtered our dataset to focus exclusively on meteorites that have genuinely "Fell." This deliberate exclusion of entries labeled as "Found" ensures precision in our analysis. Entries marked as "Found" may indicate the discovery of meteorites in a specific year, but they do not necessarily represent the actual year of the meteorite fall. Our project's primary goal is to predict future meteorite fall locations, directing our focus toward proactive research rather than retrospective documentation.

### Refining Yearly Data with a Monthly Conversion Approach

In this phase, we refine our yearly meteorite data to a more granular monthly level for a comprehensive analysis:

- **Data Collection by Year:**
  - Meteorite data is systematically collected for each `Year`.

- **Monthly Conversion:**
  - For each year, we generate a list of data for all `12 months`.

- **Geolocation Assignment:**
  - Geolocations are strategically assigned to months, incorporating specialized handling techniques to enhance accuracy.

This meticulous process prepares our meteorite fall data in a structured format, setting the stage for subsequent analysis and modeling focused on uncovering monthly trends.

## Applying Different Interpolation Techniques

- Cubic Interpolation
- Nearest Neighbor Interpolation
- Spline Interpolation

After careful evaluation, we found that the results obtained from Spline Interpolation were the much more reliable. Therefore, we chose to use Spline Interpolation for our prediction.

## Applying Deep Learning and Machine Learning

In the domain of Deep Learning, we adopted a technique known as `Shallow Deep Learning` integrating `Long Short-Term Memory (LSTM)` networks within a simplified architecture. This approach was carefully chosen to maximize the potential of LSTM for superior results.

In the realm of Machine Learning, we explored various methodologies, with the `Random Forest model` emerging as a prominent contender. However, upon thorough comparison, the performance achieved with LSTM significantly outpaced the results obtained from Random Forest. This underscores the effectiveness of our deep learning strategy in producing outstanding outcomes.

## Web Application Overview

### 1. File Operations
- Uses `os` for file handling.
- `save_map` removes existing files, generates, and saves a new heat map.

### 2. Machine Learning Predictions
- Utilizes deep learning for latitude and longitude predictions.

### 3. Flask Structure
- **Index Route (`'/'`):**
  - Handles GET/POST.
  - On POST, generates predictions, saves a new heat map, and redirects to `show_map`.
  - On GET, renders `index2.html`.
- **Map Route (`'/map'`):**
  - Renders `map.html` displaying the heat map.

### 4. Ngrok Integration
- Exposes the local server using Ngrok.

### 5. HTML Templates:
- **`index2.html`:** Form for user input (year), sends POST request.
- **`map.html`:** Displays the generated heat map.

### 6. Running
- Executed through the `__main__` block, using the development server.

## Project Collaboration and Contributions

We believe in the power of collaborative efforts to enhance and refine the Meteorite Explorer project. In the spirit of open-source development, we have made our project accessible for contributions from the community. Your insights, expertise, and ideas can play a crucial role in improving the accuracy and efficiency of meteorite landing predictions.

### How to Contribute

1. **Fork the Repository:**
   - Start by forking the Meteorite Explorer repository to your GitHub account.

2. **Clone the Repository:**
   - Clone the forked repository to your local machine using the following command:
     ```bash
     git clone https://github.com/your-username/meteorite-explorer.git
     ```

3. **Create a Branch:**
   - Create a new branch for your contributions:
     ```bash
     git checkout -b feature/your-feature-name
     ```

4. **Make Changes:**
   - Implement your enhancements or fix bugs in the codebase.

5. **Commit Changes:**
   - Commit your changes with clear and concise commit messages:
     ```bash
     git commit -m "Add your commit message here"
     ```

6. **Push Changes:**
   - Push your changes to your GitHub repository:
     ```bash
     git push origin feature/your-feature-name
     ```

7. **Submit a Pull Request:**
   - Open a pull request from your forked repository to the main Meteorite Explorer repository.
   - Provide a detailed description of your changes and improvements.

### Areas for Contribution

1. **Algorithmic Enhancements:**
   - Improve interpolation techniques or explore new methods for prediction.

2. **Data Processing Optimization:**
   - Enhance the efficiency of data preprocessing steps for better performance.

3. **Visualization Improvements:**
   - Introduce new visualizations or enhance existing ones for a more informative display.

4. **Machine Learning Model Refinement:**
   - Experiment with different models or fine-tune existing ones for better accuracy.

5. **Web Application Features:**
   - Add new features or improve the user interface of the web application.

6. **Documentation and Readme Updates:**
   - Contribute to clearer documentation or update the readme for better project understanding.

By contributing to the Meteorite Explorer project, you become an integral part of our mission to advance meteorite prediction research. Your collaboration is not only welcomed but highly valued as we work together to push the boundaries of knowledge in this fascinating field.

Thank you for considering contributing to our open-source project! Together, we can make significant strides in improving meteorite landing predictions and expanding our understanding of celestial events.
