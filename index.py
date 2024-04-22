import scanpy as sc
import pandas as pd


def load_and_save_umap_coordinates(filepath):
    # Load the .h5ad file
    adata = sc.read_h5ad(filepath)

    # Check if UMAP coordinates exist in file
    if 'X_umap' in adata.obsm.keys():
        # Extract UMAP coordinates
        umap_coords = adata.obsm['X_umap']

        # Convert to a DataFrame
        df = pd.DataFrame(umap_coords, columns=['x', 'y'])

        # Save to CSV file
        df.to_csv('umap_coordinates.csv', index=False)
        print("UMAP coordinates have been saved to 'umap_coordinates.csv'.")
    else:
        print("UMAP coordinates not found in the file.")


if __name__ == "__main__":
    file_path = 'pbmc3k_processed.h5ad'
    load_and_save_umap_coordinates(file_path)
