import matplotlib.pyplot as plt
import pandas as pd

df = pd.read_csv('umap_coordinates.csv')

plt.figure(figsize=(10, 8))
plt.scatter(df['x'], df['y'], alpha=0.5)
plt.title('UMAP Projection of the PBMC Dataset')
plt.xlabel('UMAP-1')
plt.ylabel('UMAP-2')
plt.show()
