#!/bin/python

# author : Prashant Kuntala
# last updated : May 29th, 2025 


"""
Program to generate the downloads list for all valid samples on the portal

Usage:
python genDownloadsCSV.py ./data/portal_all.json > ./data/TaRGET.csv

NOTE:
This csv is available under the downloads page on the portal for anyone who want to download all the datasets.
21219 Processed files.
"""


import pprint
import argparse
import json
import os

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Program to generate the downloads list for all valid samples on the portal')
    parser.add_argument('pj',help='portal_all.json file.')
    args = parser.parse_args()

    # read the portal.json
    with open(args.pj,'r') as f:
        portal = json.load(f)
    
    # generate the csv
    print(f'Experiment-ID,Assay,Marker,Tissue,Exposure,Exposure-Name,Lab,Age,Sex,Strain,File-Type,Filesize,DownloadURL') # header in csv
    for item in portal:
        prefix = f"{item['experiment_id']},{item['assay']},{item['marker']},{item['tissue']},{item['exposure']},{item['exposure_name']},{item['lab']},{item['age']},{item['sex']},{item['strain']}"
        for file in item['downloads']:
            print(f"{prefix},{file['filetype']},{file['filesize']},{file['fileurl']}")

        