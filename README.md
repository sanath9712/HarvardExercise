# HarvardExercise
This exercise visualizes UMAP coordinates from scRNA-seq data processing using React and Chart.js.

- index.py is the Python script to extract UMAP coordinates from the file : pbmc3k_processed.h5ad.
- The UMAP coordinates are extracted and stored in a csv file called umap_coordinates.csv which has the coordinates and which is further used for visualization the data.

command to execute python script: python index.py or python3 index.py
libraries utilized: scanpy, pandas

command to generate data viz using matplotlib in python: python viz.py or python3.py


-Steps to display the visualization in the react web app:
1) Navigate to the the react-scatterplot dir: cd react-scatterplot
2) run the react app to display the visualization on the data: npm start


Sample results stored in images folder for reference: