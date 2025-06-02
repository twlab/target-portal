#!/bin/python

# author : Prashant Kuntala

"""
Program to generate a track hub for TaRGET data

Usage:
python genTrackHub.py ./data/portal_all.json

NOTE:
- Browser trackhub link: https://epigenomegateway.wustl.edu/browser2022/?genome=mm10&hub=https://wangcluster.wustl.edu/~pkuntala/targethub.json
    - If you serve the targethub.json from a different server or location. Just change the "hub=" value to your location. 
"""


import pprint
import argparse
import json
import os

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Program to generate a track hub for TaRGET data')
    parser.add_argument('pj',help='portal_all.json file.')
    args = parser.parse_args()

    # read the portal.json
    with open(args.pj,'r') as f:
        portal = json.load(f)

    # template for hub items
    example = {
    "type": "bigwig",
    "url": "",
    "name": "",
    }

    # track colors based on the assay
    trackColor = {
       'ATAC' :'#e41a1c',
       'RNA'  :'#377eb8',
       'ChIP' :'#4daf4a',
       'RRBS' :'#984ea3',
       'WGBS' :'#ff7f00',
    }
    
    hub = []
    # generate the csv
    for item in portal:
        for file in item['downloads']:
            if file['filetype'] == 'bigWig':
                # print(f"{item['experiment_id']}-{item['exposure']}-{item['tissue']}-{item['age'].replace(' weeks','W')}-{item['sex']}-{item['assay']},{file['fileurl']}")
                
                # load first 40 tracks when visiting the trackhub. Loading all tracks is impractical. Use the WashU browser UI to select datasets to load.
                if len(hub) <= 40:
                    name = f"{item['experiment_id']}-{item['exposure']}-{item['tissue']}-{item['age'].replace(' weeks','W')}-{item['sex']}-{item['assay']}"
                    temp = example.copy()
                    temp["options"] = {"color": trackColor[item['assay']]}
                    temp["url"] = file['fileurl']
                    temp["name"] = name
                    temp["showOnHubLoad"] = True
                    hub.append(temp)
                else:
                    name = f"{item['experiment_id']}-{item['exposure']}-{item['tissue']}-{item['age'].replace(' weeks','W')}-{item['sex']}-{item['assay']}"
                    temp = example.copy()
                    temp["options"] = {"color": trackColor[item['assay']]}
                    temp["url"] = file['fileurl']
                    temp["name"] = name
                    temp["showOnHubLoad"] = False
                    hub.append(temp)
    
    # save as the trackhub json
    with open("./data/targethub.json",'w') as out:
        json.dump(hub,out)

        